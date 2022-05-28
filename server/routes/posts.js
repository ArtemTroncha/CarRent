const express = require('express')
const Post = require('../models/post')
const User = require('../models/user')
var ObjectId = require('mongoose').Types.ObjectId; 
const router = express.Router()
const {check} = require('express-validator');
const mongoose = require('mongoose')

//get all posts
router.get('/', async (req,res) => {
    try {
        res.status(200).send(await Post.find({}))
    } catch (error) {
        res.send({massage:"server error"}) 
    }
})
  
//filter
//TODO: validate year, 
router.get('/search', async (req,res) => {
    try {
        //get all objects from req.query
        const queryObj = {...req.query}
        //delete fields helping to visualize content
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el])

        let queryString = JSON.stringify(queryObj)
        //TODO: add check if [gte...] used only with year,mileage,fuel_consumption,availability
        queryString = queryString.replace(/\b(gte|gt|lte|lt|regex)\b/g, match => `$${match}`) 
        let query = Post.find(JSON.parse(queryString))
        

        if(req.query.sort){
            const sortBy = req.query.sort.split(',').join(' ')
            console.log(sortBy);
            query = query.sort(sortBy)
        }
        else {
            query = query.sort('-createdAt')
        }
  
        //pagination
        if (!req.query.page) {
            req.query.page = 1;
        }

        if (!req.query.limit) {
            req.query.limit = 10;
        }
       
        const skip = (req.query.page - 1) * req.query.limit
    
        const posts = await query.skip(skip)
                                .limit(req.query.limit)
        res.status(200).json({
        status: 'success',
        results: posts.length,
        data: {
            posts
            }
        })

    } catch (error) {
        res.status(400)
        .send({massage:"server error"})
    }
})

//get all posts from one person by person id
router.get('/creator/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async (req,res) => {
        try {
            res.send(await Post.find({createdBy_ID: new ObjectId(req.params.id)}))
        } catch (error) {
            console.log(error)
            res.send({massage:"server error"})
        }
        res.status(201).send;
})

//get post with post id
router.get('/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async (req,res) => {
        try {
            res.send(await Post.find({_id: new ObjectId(req.params.id)}))
        } catch (error) {
            console.log(error)
            res.send({massage:"server error"})
        }
        res.status(201).send;
})


//add post 
router.post('/', 
    async(req,res) => {
    try {
        const {createdBy_ID} = req.body

        var isValid = mongoose.Types.ObjectId.isValid(createdBy_ID);
        if(!isValid)
        {
            return res.status(400).json({massage: "createdBy_Id error"})
        }
        
        const creator = await User.findById(createdBy_ID)

        if (!creator) {
            return res.status(400).json({message: "Cant find creator"})
        }

        //create post if its ok
        const post = new Post(req.body)

        post.createdAt = Date.now();
        console.log(post.createdAt);
        await post.save()
        return res.send({maessage: "Post created"}) 

    } catch (e) {
        console.log(e)
        res.send({massage:"server error"})
    }
    res.status(201).send;
})

//add new time interval 
router.post('/availability/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async(req,res) => {
    try {
        const postId = new ObjectId(req.params.id)
        var isExist = await Post.findById(postId)
        if(!isExist)
        {
            return res.status(400).json({massage: "Posts with that id does not exist"})
        }
        const data = req.body
        
        if(Object.keys(data).length === 0) {
            return res.status(400).send({message : "Can't add empty time interval"})
        }
        await Post.updateOne({_id: postId},
        {
        $push: {
            availability : {
                "start_date": data.start_date,
                "end_date": data.end_date
                }
            }
        });
        
        return res.status(200).send({message: "Added new date"})
    } catch (error) {
        res.send({massage:"server error"}) 
    }
})

//add reservation interval
router.post('/availability/:id/reservation',
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async (req,res) =>{
        try {
            const reservation = {...req.body}
            const postId = new ObjectId(req.params.id)
            var post = await Post.findById(postId)
            if(!post)
            {
                return res.status(400).json({massage: "Post with that id does not exist"})
            }
            if(!post.availability)
            {
                return res.status(400).json({massage: "Post don't have time interval"})
            }
            
            await Post.updateOne(
                {
                    _id: postId, 
                    availability: { $elemMatch: {start_date : {$lte: reservation.start_date}, end_date: {$gte: reservation.end_date}}}
                },
                { $push: {
                    "availability.$.reserved": {
                                "start_date": reservation.start_date,
                                "end_date": reservation.end_date,
                                "reservedBy_ID": reservation.reservedBy_ID
                    }}
                });
            
                return res.status(200).send({message: "Added new reservation date"})
        } catch (e) {
            console.log(e);
            return res.status(400).send({massage: "Error"})
        }
    })

//return available dates of post
router.get('/avail/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async(req,res) => {
    try {
        const postId = new ObjectId(req.params.id)
        const post = await Post.findById(postId)
       
        
        let availability = []
        
        
        for(let i = 0; i < post.availability.length; i++){
            let input = post.availability[i]
            if(input.reserved.length != 0)
            {
                for(let i = 0; i <= input.reserved.length; i++)
                {   
                    if(i == 0)
                    {
                        availability.push({"start_date": input.start_date,"end_date": dayBefore(input.reserved[i].start_date)})
                        continue   
                    }
                    else if ( i == input.reserved.length){
                        availability.push({"start_date": dayAfter(input.reserved[i-1].end_date),"end_date": input.end_date})
                        continue
                    }
                    availability.push({"start_date": dayAfter(input.reserved[i-1].end_date),"end_date": dayBefore(input.reserved[i].start_date)})
                    
                }
            }
            //if dont have any reservation return full interval
            else {
                availability.push({"start_date": input.start_date,"end_date" : input.end_date})
            }
            
        }
        res.status(200).send(availability)

    } catch (error) {
        console.log(error);
        res.send({massage:"server error"})
    }
})

function dayBefore(date = new Date()){
    const newDate = new Date(date.getTime())

    newDate.setDate(date.getDate() - 1)
    return newDate 
}
function dayAfter(date = new Date()){
    const newDate = new Date(date.getTime())

    newDate.setDate(date.getDate() + 1)
    return newDate 
}

//update post
router.put('/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async(req,res)=> {
        try {
            const changes = {...req.body}
            
            await Post.findByIdAndUpdate(req.params.id,changes)
            
            return res.status(200).send({message:" Post updated"})

            }
        catch (error) {
            res.send({message:"server error"}) 
        }
})       

module.exports = router;