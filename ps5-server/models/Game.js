const mongoose = require('mongoose');


const GameSchema = mongoose.Schema({
    gameId: {
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


module.exports = mongoose.model('games', GameSchema)