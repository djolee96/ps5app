const express = require('express');
const router = express.Router();
const Tv = require('../../models/Tv');
const verify = require('./verifyToken');


// Get All tv available

router.get('/', verify, async (req, res) => {

    try {
        let tvs = await Tv.find();
        // let availableTvs = tvs.filter(tv => tv.available > 0)
        res.json(tvs)
    } catch (err) {
        res.json({ msg: err })
    }
})
// create tv
router.post('/', (req, res) => {
    const newTv = new Tv({
        tvId: req.body.tvId,
        name: req.body.name,
        img: req.body.img,
        available: req.body.available
    })

    newTv.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err })
        })
})


// updated TV (rented/not-rented)
router.patch('/', verify, async (req, res) => {
    try {
        const updatedTv = await Tv.updateOne({ tvId: req.body.tvId }, { $inc: { available: req.body.available } })
        const uTV = await Tv.findOne({ tvId: req.body.tvId })
        res.json(uTV)
    } catch (err) {
        res.json({ msg: err })
    }
})

module.exports = router;    