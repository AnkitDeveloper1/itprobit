const {Blogs, validate} = require('../models/blogs');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');
const uploadFile = require("../middleware/upload");

// Get All Blogs
router.get('/', authentication, async (req, res) => {
    
    let blogs = await Blogs.find();
    
    res.json({
        "success": true,
        "data": blogs
    });
});

// Add Blog
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
    
    let blogs = await Blogs.findOne({title: req.body.title});
    if(blogs) {
        return res.json({
            "success": false,
            "message": "Blog already exists",
        });
    }

    blogs = new Blogs({
        title: req.body.title,
        content: req.body.content,
        featured_image: req.file.filename,
        tags: req.body.tags,
    });

    await blogs.save();

    res.json({
        "success": true,
        "message": "Blog Added Successfully!",
    });
});

// Edit Blog
router.put('/:id', authentication, async (req, res) => {
    const blog_id = req.params.id;
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let blogs = await Blogs.findOne({title: req.body.title, _id: { $ne: Object(blog_id) }});
    if(blogs) {
        return res.json({
            "success": false,
            "message": "Blog already exists",
        });
    }

    const blog_data = {
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
    };

    if (req.file !== undefined) {
        await uploadFile(req, res);
        blog_data['featured_image'] =req.file.filename;
        return res.json({
            "success": false,
            "message": "Please upload a file!",
        });
    }

    await Blogs.updateOne({'_id': Object(blog_id)}, {'$set': blog_data});

    res.json({
        "success": true,
        "message": "Blog Updated Successfully!",
    });
});

// Delete Blog
router.delete('/:id', authentication, async (req, res) => {
    const blog_id = req.params.id;
    
    let blogs = await Blogs.findOne({_id: { $ne: Object(blog_id) }});
    if(blogs) {
        return res.json({
            "success": false,
            "message": "Blog Not Exists",
        });
    }

    await Blogs.deleteOne({'_id': Object(blog_id)});

    res.json({
        "success": true,
        "message": "Blog Deleted Successfully!",
    });
});

module.exports = router;
