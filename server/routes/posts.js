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

// //get all posts( full )
// router.get('/full', async (req,res) => {
//     try {
//         res.status(200).send(await Post.find({}))
//     } catch (error) {
//         res.send({massage:"server error"}) 
//     }
// })

//test route to display dates in posts
router.get('/avail', async(req,res) => {
    try {
        res.status(200).send(await Post.find({}).select('availability'))
    } catch (error) {
        res.send({massage:"server error"}) 
    }
})


  
//filter
//TODO: validate year, 
router.get('/search', async (req,res) => {
    try {
        const match = {}
        if(req.query.brand){ match.brand = req.query.brand }
        if(req.query.version){ match.version = req.query.version}
        if(req.query.model){ match.model = req.query.model }
        if(req.query.color){ match.color = req.query.color }
        if(req.query.condition){ match.condition = req.query.condition }
        if(req.query.mileage){ match.mileage = req.query.mileage }
        if(req.query.year){ match.year = req.query.year }
        
        console.log(match)

    res.status(200).send(await Post.find(match))
    } catch (error) {
        res.send({massage:"server error"})
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
        await Post.updateOne({_id: postId},
        {
        $push: {
            availability : {
                "start_date": data.startDate,
                "end_date": data.endDate
                }
            }
        });
        
        return res.status(200).send("Added new date")
    } catch (error) {
        res.send({massage:"server error"}) 
    }
})

//update post
router.put('/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async(req,res)=> {
        try {
            const changes ={}
            if(req.body.title){ changes.title = req.body.title }
            if(req.body.discription){ changes.discription = req.body.discription}
            if(req.body.brand){ changes.brand = req.body.brand }
            if(req.body.model){ changes.model = req.body.model }
            if(req.body.version){ changes.version = req.body.version }
            if(req.body.year){ changes.year = req.body.year }
            if(req.body.color){ changes.color = req.body.color }
            if(req.body.VIN){ changes.VIN = req.body.VIN  }
            if(req.body.condition){ changes.condition = req.body.condition }
            if(req.body.mileage){ changes.mileage = req.body.mileage }
            if(req.body.fuel_type){ changes.fuel_type = req.body.fuel_type }
            if(req.body.fuel_consumption){ changes.fuel_consumption = req.body.fuel_consumption }
            if(req.body.seat_count){ changes.seat_count = req.body.seat_count }
            
            
            //TODO: finish !!!! find better way to do it)
            
            await Post.findByIdAndUpdate(req.params.id,changes)
            
            //TODO: find different way to made it
            }
            catch (error) {
            res.send({massage:"server error"}) 
        }
        return res.status(200).send({message:" Post updated"})
})

module.exports = router;