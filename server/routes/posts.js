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
            return res.status(400).json({message: "createdBy_Id error"})
        }
        
        const creator = await User.findById(createdBy_ID)

        if (!creator) {
            return res.status(400).json({message: "Cant find creator"})
        }
        //TODO: available date validate

        //TODO: seat count min max validate

        

        //create post if its ok
        const post = new Post(req.body)
        await post.save()
        return res.send({message: "Post created"}) 

    } catch (e) {
        console.log(e)
        res.send({message:"server error"})
    }
    res.status(201).send;
})

module.exports = router;