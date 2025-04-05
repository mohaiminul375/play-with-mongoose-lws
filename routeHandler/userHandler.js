const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const usersSchemas = require('../schemas/usersSchema');
const User = new mongoose.model('User', usersSchemas);
// SIGN UP
router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            name: req.body.name,
            userName: req.body.userName,
            password: hashedPassword,
        });
        // Save on DB
        await newUser.save()
        res.status(200).json({ message: 'signup successfully' })
    } catch (error) {
        res.status(500).json({ message: `failed to signup:${error}` })
    }
})

module.exports = router;