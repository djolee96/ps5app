const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');
const verify = require('./verifyToken');

// Get All Game available

router.get('/', verify, async (req, res) => {

    try {
        let games = await Game.find();
        res.json(games)
    } catch (err) {
        res.json({ msg: err })
    }
})
// create Game
router.post('/', (req, res) => {
    const newGame = new Game({
        gameId: req.body.gameId,
        name: req.body.name,
        img: req.body.img,
        available: req.body.available
    })

    newGame.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err })
        })
})


// updated Game (rented/not-rented)
router.patch('/', verify, async (req, res) => {
    try {
        const updatedGame = await Game.updateOne({ gameId: req.body.gameId }, { $inc: { available: req.body.available } })
        const uGame = await Game.findOne({ gameId: req.body.gameId })
        res.json(uGame)
    } catch (err) {
        res.json({ msg: err })
    }
})

module.exports = router;    