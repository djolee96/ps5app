const express = require('express');
const router = express.Router();
const Console = require('../../models/Console');
const verify = require('./verifyToken');

// Get All Consoles available

router.get('/', verify, async (req, res) => {

    try {
        let consoles = await Console.find();
        res.json(consoles)
    } catch (err) {
        res.json({ msg: err })
    }
})
// create console
router.post('/', (req, res) => {
    const newConsole = new Console({
        consoleId: req.body.consoleId,
        name: req.body.name,
        img: req.body.img,
        available: req.body.available
    })

    newConsole.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err })
        })
})


// updated Console (rented/not-rented)
router.patch('/', verify, async (req, res) => {
    try {
        const updatedConsole = await Console.updateOne({ consoleId: req.body.consoleId }, { $inc: { available: req.body.available } })
        const uConsole = await Console.findOne({ consoleId: req.body.consoleId })
        res.json(uConsole)
    } catch (err) {
        res.json({ msg: err })
    }
})

module.exports = router;    