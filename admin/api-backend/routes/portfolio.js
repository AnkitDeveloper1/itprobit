const {Portfolio, validate} = require('../models/portfolio');
const express = require('express');
const router = express.Router();
const path = require('path');
const authentication = require('../middleware/auth');
const uploadFile = require("../middleware/upload");

// Get Portfolio
router.get('/', authentication, async (req, res) => {
    
    let portfolio = await Portfolio.find();
    
    res.json({
        "success": true,
        "data": portfolio
    });
});


// Get Portfolio
router.get('/:id', authentication, async (req, res) => {
    
    let portfolio = await Portfolio.findOne({_id: req.params.id});
    
    res.json({
        "success": true,
        "data": portfolio
    });
});


// Add Portfolio
router.post('/', authentication, async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.json({
                "success": false,
                "errors": "No file were uploaded!",
            });
        }
        // File
        let featured_image = req.files.featured_image;
        let uploadPath = Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(featured_image.name)
        const featuredImageFile = featured_image.name + '-' + uploadPath
        uploadPath = './../../public/uploads/' + featured_image.name + '-' + uploadPath
        
        uploadFile(featured_image, uploadPath)
        
        const {error} = validate(req.body);
        if(error) return res.json({
            "success": false,
            "errors": error.details,
        });
        
        let portfolio = await Portfolio.findOne({title: req.body.title});
        if(portfolio) {
            return res.json({
                "success": false,
                "message": "Portfolio already exists",
            });
        }
        
        portfolio = new Portfolio({
            categories: req.body.categories,
            title: req.body.title,
            content: req.body.content,
            featured_image: featuredImageFile,
            bgcolor: req.body.bgcolor,
            url: req.body.url,
            status: req.body.status,
            added_by: req.user._id,
        });
        
        await portfolio.save();
        
        res.json({
            "success": true,
            "message": "Portfolio added successfully"
        });
    
    } catch (err) {
        console.log(err);
        res.json({
            "success": false,
            "message": `Could not upload the file: ${req.file.originalname}. ${err}`
        });
    }
});

// Update Portfolio
router.put('/:id', authentication, async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let portfolio = await Portfolio.findOne({_id: Object(req.params.id) });
    if(!portfolio) {
        return res.json({
            "success": false,
            "message": "Portfolio not exists",
        });
    }
    
    let query = { _id: Object(req.params.id) };
    portfolio['categories']     = req.body.categories;
    portfolio['title']          = req.body.title;
    portfolio['content']        = req.body.content;
    console.log(req.body);
    if(req.file.filename) {
        await uploadFile(req, res);
    
        if (req.file === undefined) {
            return res.json({
                "success": false,
                "message": "Please upload a file!",
            });
        }
        portfolio['featured_image'] = req.file.filename;
    }
    portfolio['bgcolor']        = req.body.bgcolor;
    portfolio['url']            = req.body.url;
    portfolio['status']         = req.body.status;
    delete portfolio['_id'];
    delete portfolio['added_by'];
    delete portfolio['created_on'];
    await Portfolio.updateOne(query, portfolio);

    res.json({
        "success": true,
        "message": "Portfolio updated successfully"
    });
});


// Delete Portfolio
router.delete('/:id', authentication, async (req, res) => {
    
    let category = await Portfolio.findOne({_id: Object(req.params.id) });
    
    if(!category) {
        return res.json({
            "success": false,
            "message": "Category not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    await Portfolio.deleteOne(query);

    res.json({
        "success": true,
        "message": "Portfolio deleted successfully"
    });
});

module.exports = router;
