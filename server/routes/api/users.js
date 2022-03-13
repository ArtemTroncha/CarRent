const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

//get users
router.get('/', async (req,res) => {
    const users = await loadUsersCollection();
    res.send(await users.find({}).toArray());

})

//add users
router.post('/', async (req,res) => {
    const users = await loadUsersCollection();
    await users.insertOne(
        {
            name: req.body.name,
            surname: req.body.surname,
            createdAt: new Date()
        }
    );
    res.status(201).send;
})

//delete users

async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://Artem_Troncha:pagbek-6febcu-Hownof@users.0myk7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('Car_Rent').collection('users');
}

module.exports = router;