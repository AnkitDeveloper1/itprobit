const {Reviews, validate} = require('../models/reviews');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');

// Get Reviews
router.get('/', authentication, async (req, res) => {
    
    let reviews = await Reviews.find();
    
    res.json({
        "success": true,
        "data": reviews
    });
});

// Get Reviews
router.get('/:id', authentication, async (req, res) => {
    
    let review = await Reviews.findOne({_id: req.params.id});
    
    res.json({
        "success": true,
        "data": review
    });
});

// Add Reviews
router.post('/', authentication, async (req, res) => {
    try {
        const {error} = validate(req.body);
        if(error) return res.json({
            "success": false,
            "errors": error.details,
        });
        
        let reviews = new Reviews({
            customer: req.body.customer,
            message: req.body.message,
            platform: req.body.platform,
        });
        
        await reviews.save();
        
        res.json({
            "success": true,
            "message": "Review added successfully"
        });
    
    } catch (err) {
        console.log(err);
        res.json({
            "success": false,
            "message": "Something Went Wrong!"
        });
    }
});

// Update Reviews
router.put('/:id', authentication, async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let reviews = await Reviews.findOne({_id: Object(req.params.id) });
    if(!reviews) {
        return res.json({
            "success": false,
            "message": "Review not exists",
        });
    }
    
    let query = { _id: Object(req.params.id) };
    reviews['customer'] = req.body.customer;
    reviews['message']  = req.body.message;
    reviews['platform'] = req.body.platform;
    
    delete reviews['_id'];
    delete reviews['created_on'];
    await Reviews.updateOne(query, reviews);

    res.json({
        "success": true,
        "message": "Review updated successfully"
    });
});

// Delete Reviews
router.delete('/:id', authentication, async (req, res) => {
    
    let review = await Reviews.findOne({_id: Object(req.params.id) });
    
    if(!review) {
        return res.json({
            "success": false,
            "message": "Review not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    await Reviews.deleteOne(query);

    res.json({
        "success": true,
        "message": "Review deleted successfully"
    });
});

module.exports = router;
