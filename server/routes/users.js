const {User, validate} = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const authentication = require('../middleware/auth');

// Register User
router.post('/', upload.none(), async (req, res) => {
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
        "redirect": "/"
    });
    
    let user = await User.findOne({email: req.body.email});
    if(user) {
        req.flash('error', 'user already registered')
        return res.json({
            "success": false,
            "message": "user already registered",
            "redirect": "/"
        });
    }

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    
    res.json({
        "success": true,
        "message": "User Registed Successfully!",
        "redirect": "/"
    });
});

module.exports = router;
