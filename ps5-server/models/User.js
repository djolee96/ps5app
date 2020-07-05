const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    },
    bonus: {
        bonusCount: {
            type: Number,
            default: 0
        }
    },
    renting: {
        items: {
            console: {
                type: String,
                default: ""
            },
            tv: {
                type: String,
                default: ""
            },
            controllers: [
                {
                    controllerId: String,
                    name: String,
                }
            ],
            games: [
                {
                    gameId: String,
                    name: String
                }
            ]

        },
        time: {
            type: Date,
            default: ""
        }
    }
})


module.exports = mongoose.model('user', UserSchema)