const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/api/users')

app.use('/api/users', users);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server started');
})