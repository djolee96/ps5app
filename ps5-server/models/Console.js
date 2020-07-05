const mongoose = require('mongoose');


const ConsoleSchema = mongoose.Schema({
    consoleId: {
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


module.exports = mongoose.model('console', ConsoleSchema)