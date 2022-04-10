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

//get all posts from one person bu person id
router.get('/creator/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async (req,res) => {
        res.send(await Post.find({createdBy_ID: new ObjectId(req.params.id)}))
})

//get post with post id
router.get('/:id', 
    [
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async (req,res) => {
        res.send(await Post.find({_id: new ObjectId(req.params.id)}))
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