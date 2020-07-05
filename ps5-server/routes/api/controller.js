const express = require('express');
const router = express.Router();
const Controller = require('../../models/Controller');
const verify = require('./verifyToken');


// Get All Controllers available

router.get('/', verify, async (req, res) => {

    try {
        let controllers = await Controller.find();
        res.json(controllers)
    } catch (err) {
        res.json({ msg: err })
    }
})
// create controller
router.post('/', (req, res) => {
    const newController = new Controller({
        controllerId: req.body.controllerId,
        name: req.body.name,
        img: req.body.img,
        available: req.body.available
    })

    newController.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err })
        })
})


// updated Controller (rented/not-rented)
router.patch('/', verify, async (req, res) => {
    try {
        const updatedController = await Controller.updateOne({ controllerId: req.body.controllerId }, { $inc: { available: req.body.available } })
        const uController = await Controller.findOne({ controllerId: req.body.controllerId })
        res.json(uController)
    } catch (err) {
        res.json({ msg: err })
    }
})

module.exports = router;    