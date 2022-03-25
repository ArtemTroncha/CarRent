const express = require('express')
const config = require('./config/default.json');
//const DB_URL = 'mongodb+srv://Artem_Troncha:pagbek-6febcu-Hownof@users.0myk7.mongodb.net/Car_Rent?retryWrites=true&w=majority'
const mongoose  = require('mongoose');
const app = express();
const cors = require('cors')

//middleware
app.use(express.json());
app.use(cors())


const users = require('./routes/users')
const posts = require('./routes/posts');


app.use('/api/users', users);
app.use('/api/posts', posts);

//config
const DB_URL = config.DB_URL
const PORT = config.PORT

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