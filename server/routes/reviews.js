const {Reviews, validate} = require('../models/reviews');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');

// Get All Reviews
router.get('/', authentication, async (req, res) => {
    
    let reviews = await Reviews.find();
    
    res.json({
        "success": true,
        "data": reviews
    });
});

// Add Review
router.post('/', authentication, async (req, res) => {

    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });

    reviews = new Reviews({
        customer: req.body.customer,
        message: req.body.message,
        platform: req.body.platform
    });

    await reviews.save();

    res.json({
        "success": true,
        "message": "Review Added Successfully!",
    });
});

// Edit Review
router.put('/:id', authentication, async (req, res) => {
    const review_id = req.params.id;
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });

    const reviews_data = {
        customer: req.body.customer,
        message: req.body.message,
        platform: req.body.platform
    };

    await Reviews.updateOne({'_id': Object(review_id)}, {'$set': reviews_data});

    res.json({
        "success": true,
        "message": "Review Updated Successfully!",
    });
});

// Delete Review
router.delete('/:id', authentication, async (req, res) => {
    const review_id = req.params.id;
    
    let reviews = await Reviews.findOne({_id: { $ne: Object(review_id) }});
    if(review) {
        return res.json({
            "success": false,
            "message": "Review Not Exists",
        });
    }

    await Reviews.deleteOne({'_id': Object(review_id)});

    res.json({
        "success": true,
        "message": "Review Deleted Successfully!",
    });
});

module.exports = router;
