const {Schema, model, mongoose} = require('mongoose')

const Post = new Schema({
    createdBy_ID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String,require: true},
    discription: {type: String},
    brand: {type: String, required: true},
    model: {type: String, required: true},
    version: {type: String},
    year: {type: Number, required: true},
    color: { type: String , required: true},
    VIN: {type: String, required: true},
    condition: {type: String},
    mileage: {type: Number ,required: true},
    fuel_type: { type: String, required: true},
    fuel_consumption:{ type: Number, required: true},
    seat_count: {type: Number, required: true},
    availability: [{
        start_date: {type: Date, required: true},
        end_date: {type: Date, required: true}
    }],
    images:[{
        url: { type: String , required: true}
    }]
})

module.exports = model('Post',Post); 