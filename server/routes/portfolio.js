const {Portfolio, validate} = require('../models/portfolio');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');
const uploadFile = require("../middleware/upload");

// Get All Portfolio
router.get('/', authentication, async (req, res) => {
    
    let portfolio = await Portfolio.find();
    
    res.json({
        "success": true,
        "data": portfolio
    });
});

// Add Portfolio
router.post('/', authentication, async (req, res) => {
    await uploadFile(req, res);

    if (req.file === undefined) {
        return res.json({
            "success": false,
            "message": "Please upload a file!",
        });
    }
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let portfolio = await Portfolio.findOne({title: req.body.title});
    if(portfolio) {
        return res.json({
            "success": false,
            "message": "Portfolio already registered",
        });
    }

    portfolio = new Portfolio({
        title: req.body.title,
        content: req.body.content,
        featured_image: req.file.filename,
        bgcolor: req.body.bgcolor,
        url: req.body.url,
        categories: req.body.categories,
    });

    await portfolio.save();

    res.json({
        "success": true,
        "message": "Portfolio Added Successfully!",
    });
});

// Edit Portfolio
router.put('/:id', authentication, async (req, res) => {
    const portfolio_id = req.params.id;
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let portfolio = await Portfolio.findOne({title: req.body.title, _id: { $ne: Object(portfolio_id) }});
    if(portfolio) {
        return res.json({
            "success": false,
            "message": "Portfolio already registered",
        });
    }

    const portfolio_data = {
        title: req.body.title,
        content: req.body.content,
        bg_color: req.body.bg_color,
        url: req.body.url,
        categories: req.body.categories,
    };

    if (req.file !== undefined) {
        await uploadFile(req, res);
        portfolio_data['featured_image'] =req.file.filename;
        return res.json({
            "success": false,
            "message": "Please upload a file!",
        });
    }

    await Portfolio.updateOne({'_id': Object(portfolio_id)}, {'$set': portfolio_data});

    res.json({
        "success": true,
        "message": "Portfolio Updated Successfully!",
    });
});

// Delete Portfolio
router.delete('/:id', authentication, async (req, res) => {
    const portfolio_id = req.params.id;
    
    let portfolio = await Portfolio.findOne({_id: { $ne: Object(portfolio_id) }});
    if(portfolio) {
        return res.json({
            "success": false,
            "message": "Portfolio Not Exists",
        });
    }

    await Portfolio.deleteOne({'_id': Object(portfolio_id)});

    res.json({
        "success": true,
        "message": "Portfolio Deleted Successfully!",
    });
});

module.exports = router;
