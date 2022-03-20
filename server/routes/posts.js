const express = require('express')
const Post = require('../models/post')
const User = require('../models/user')
var ObjectId = require('mongoose').Types.ObjectId; 
const router = express.Router()
const {check} = require('express-validator');
const mongoose = require('mongoose')

//get all posts
router.get('/', async (req,res) => {
    res.send(await Post.find({}))
})

router.get('/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async (req,res) => {
        res.send(await Post.find({user_ID: new ObjectId(req.params.id)}))
})


//add post 
router.post('/', 
    async(req,res) => {
    try {
        const {createdBy_ID, brand, model, version, year} = req.body

        var isValid = mongoose.Types.ObjectId.isValid(createdBy_ID);
        if(!isValid)
        {
            return res.status(400).json({massage: "createdBy_Id error"})
        }
        
        const creator = await User.findById(createdBy_ID)

        if (!creator) {
            return res.status(400).json({message: "Cant find creator"})
        }
        const post = new Post({createdBy_ID, brand, model, version, year})
        await post.save()
        return res.send({maessage: "Post created"}) 

    } catch (e) {
        console.log(e)
        res.send({massage:"server error"})
    }
    res.status(201).send;
})

module.exports = router;