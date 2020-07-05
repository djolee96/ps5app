const mongoose = require('mongoose');


const ControllerSchema = mongoose.Schema({
    controllerId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    available: {
        type: Number
    }
})


module.exports = mongoose.model('controller', ControllerSchema)