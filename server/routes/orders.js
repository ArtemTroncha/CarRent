const express = require('express')
const User = require('../models/user')
const Post = require('../models/post')
const Order = require('../models/order') 
const {check} = require('express-validator')
var ObjectId = require('mongoose').Types.ObjectId; 


const router = express.Router()

//show all
router.get('/', async(req,res) => {
    try {
        
        res.status(200).send(await Order.find({}))
    } catch (e) {
        res.status(400).send(e)
    }
})

//add new order
router.post('/', async (req,res) => {
    try {
        const {reservator_id,owner_id,post_id,date,status} = req.body

        const order = new Order({reservator_id,owner_id,post_id,date,status})
        
        await order.save()
        return res.send({massage: "Order created"})
    } catch (e) {
        res.status(400).send(e)
    }
})

//change order status
router.put('/changeStatus/:id', 
    [   
    check('id').customSanitizer(value => {
        return ObjectId(value);
    })],
    async(req,res) => {
        try {
            const statuses = ['confirmed','canceled']
            if(!statuses.includes(req.body.status)){
                res.status(400).send({massege: "Bad status"})
            }
            const changes = {...req.body}
            const order = await Order.findByIdAndUpdate(req.params.id,changes)

            const post = await Post.updateOne(
                {
                    _id: order.post_id, 
                    availability: { $elemMatch: {start_date : {$lte: order.date[0].start_date}, end_date: {$gte: order.date[0].end_date}}}
                },
                { $push: {
                    "availability.$.reserved": {
                                "start_date": order.date[0].start_date,
                                "end_date": order.date[0].end_date,
                                "reservedBy_ID": order.reservator_id
                    }}
                });
            console.log(post);
            res.status(200).send({message:"Order status updated"})
        } catch (e) {
            res.status(400).send(e)
        }
    })

module.exports = router;