const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const { registerValidation, loginValidation } = require('../../validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');



// REGISTER

router.post('/register', async (req, res) => {

    // validate data before creating user 
    const { error } = registerValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    // check if the user exist
    const emailExist = await User.findOne({ email: req.body.email });
    const usernameExist = await User.findOne({ username: req.body.username })
    if (emailExist) {
        return res.send("Email already exists")
    }
    if (usernameExist) {
        return res.send("username already exists")
    }

    // hash the password 
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    //create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hashPassword
    })
    try {
        const savedUser = await user.save()
        res.send({ user: savedUser.username })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    // validate data before creating user 
    const { error } = loginValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    // check if the user exist
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
        return res.send("user doesn't exist")
    }

    //password is correct?
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
        return res.send("Invalid Password")
    }
    // create and assign a token

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token);
    res.json(token)

})


// GET user info 
router.get('/', verify, async (req, res) => {
    // get user by id from jwt token
    try {
        const user = await User.findOne({ _id: req.user._id })
        // const user = await User.findOne({ username: req.header("auth-token") })
        res.json(user)
    } catch (err) {
        res.json({ msg: err })
    }
})

// updated user 

router.patch('/', verify, async (req, res) => {
    try {
        const updatedUser = await User.updateOne({ _id: req.user._id }, {
            $set: {
                renting: {
                    items: {
                        console: req.body.console,
                        tv: req.body.tv,
                        controllers: req.body.controllers,
                        games: req.body.games
                    }
                    , time: req.body.time
                }
            }
        })

        const newUser = await User.findOne({ _id: req.user._id })
        res.json(newUser)
    } catch (err) {
        res.json({ msg: err })
    }
})

module.exports = router;    