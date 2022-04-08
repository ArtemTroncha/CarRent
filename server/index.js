const express = require('express')
const mongoose  = require('mongoose');
const app = express();
const cors = require('cors')

require('dotenv').config() // dotenv

//Routes
const users = require('./routes/users')
const posts = require('./routes/posts')
const images = require('./routes/images')

//middleware
app.use(express.json());
app.use(cors())

//Route middleware
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/images', images);

//config
const DB_URL = process.env.DB_URL
const PORT = process.env.PORT

//start server
const start = async ()=> {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}


start()