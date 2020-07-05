const mongoose = require('mongoose');


const TvSchema = mongoose.Schema({
    tvId: {
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
        type: Number,
        min: 0
    }
})


module.exports = mongoose.model('tv', TvSchema)