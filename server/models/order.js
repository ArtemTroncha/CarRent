const {Schema, model, mongoose} = require('mongoose')

const Order = new Schema({
    reservator_id : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    owner_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    post_id : {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    date: [{
        start_date: {type: Date, required: true},
        end_date: {type: Date, required: true}
    }],
    status: {type : String, required: true}
})

module.exports = model('Order',Order); 