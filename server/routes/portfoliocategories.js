const {PortfolioCategories, validate} = require('../models/portfoliocategories');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');

// Get All Portfolio Categories
router.get('/', authentication, async (req, res) => {
    
    let portfolioCategories = await PortfolioCategories.find();
    
    res.json({
        "success": true,
        "data": portfolioCategories
    });
});

// Add Portfolio Categories
router.post('/', authentication, async (req, res) => {

    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let portfolioCategories = await PortfolioCategories.findOne({name: req.body.name});
    if(portfolioCategories) {
        return res.json({
            "success": false,
            "message": "Portfolio Category already exists",
        });
    }

    portfolioCategories = new PortfolioCategories({
        name: req.body.name,
        is_status: req.body.is_status
    });

    await portfolioCategories.save();

    res.json({
        "success": true,
        "message": "Portfolio Category Added Successfully!",
    });
});

// Edit Portfolio Categories
router.put('/:id', authentication, async (req, res) => {
    const portfolio_id = req.params.id;
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let portfolioCategories = await PortfolioCategories.findOne({name: req.body.name, _id: { $ne: Object(portfolio_id) }});
    if(portfolioCategories) {
        return res.json({
            "success": false,
            "message": "Portfolio Cactegory already exists",
        });
    }

    const portfolio_data = {
        name: req.body.name,
        is_status: req.body.is_status,
    };

    await PortfolioCategories.updateOne({'_id': Object(portfolio_id)}, {'$set': portfolio_data});

    res.json({
        "success": true,
        "message": "Portfolio Category Updated Successfully!",
    });
});

// Delete Portfolio Categories
router.delete('/:id', authentication, async (req, res) => {
    const portfolio_id = req.params.id;
    
    let portfolioCategories = await PortfolioCategories.findOne({_id: { $ne: Object(portfolio_id) }});
    if(portfolioCategories) {
        return res.json({
            "success": false,
            "message": "Portfolio Category Not Exists",
        });
    }

    await PortfolioCategories.deleteOne({'_id': Object(portfolio_id)});

    res.json({
        "success": true,
        "message": "Portfolio Category Deleted Successfully!",
    });
});

module.exports = router;
