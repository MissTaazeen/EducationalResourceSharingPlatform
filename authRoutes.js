const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async(req, res) => {
    const {name, email, password} = req.body;
    let user = await User.findOne({email});
    if (user) return res.status(400).json({mes: 'User already exists.'});
    const hashedPassword = await bcrypt.has(password, 10);
    user = new user({name, email, password: hashedPassword});

    await user.save();
    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.json({token});
});

router.post('/login', async(req, res) => {
    const { email, password} = req.body;
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({mes: 'Invalid Credentials!'});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials!'});

    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.json({token});
});

module.exports = router;