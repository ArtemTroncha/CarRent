const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const config = require('../config/default.json')

const secretKey = config.secretKey


//get users 
router.get('/', async (req,res) => {
    res.send(await User.find({}));
})


//register users
router.post('/registration', 
    [
        check('email',"Uncorrect email").isEmail(),
        check ('password',"uncorrect password").isLength({min:3,max:12})
    ],
    async (req,res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({massage: "Uncorrect request",errors})
        }
        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if(candidate){
            return res.status(400).json({massage: "Email already exist"})
        }
        const hashPassword = await bcrypt.hash(password,8)
        const user = new User({email, password: hashPassword})
        await user.save()
        return res.send({maessage: "User created"})  

    } catch (error) {
        console.log(error);
        res.send({massage:"server error"})
    }
    res.status(201).send;
})

//login users
router.post('/login', async (req,res) => {
    try {
    
        const {email, password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({massage: "Cant find user"})
        }
        const isValid = bcrypt.compareSync(password, user.password)
        if (!isValid) {
            return res.status(400).json({massage: "Invalid password"})
        }
        const token = jwt.sign({id: user.id},'secret-key',{expiresIn: "1h"})
        return res.json({
            token
        })

    } catch (error) {
        console.log(error);
        res.send({massage:"server error"})
    }
    res.status(201).send;
})

//delete users




module.exports = router;