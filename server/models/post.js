const {Schema, model, mongoose} = require('mongoose')


//var ObjectID = Schema.ObjectID
const Post = new Schema({
    createdBy_ID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    brand: {type: String, required: true},
    model: {type: String, required: true},
    version: {type: String, required: true},
    year: {type: Number, required: true}
})

module.exports = model('Post',Post);