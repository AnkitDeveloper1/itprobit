const {Blogs, validate} = require('../models/blog');
const express = require('express');
const router = express.Router();
const path = require('path');
const authentication = require('../middleware/auth');
const uploadFile = require("../middleware/upload");

// Get Blog
router.get('/', authentication, async (req, res) => {
    
    let blog = await Blogs.find();
    
    res.json({
        "success": true,
        "data": blog
    });
});


// Get Blog
router.get('/:id', authentication, async (req, res) => {
    
    let blog = await Blogs.findOne({_id: req.params.id});
    
    res.json({
        "success": true,
        "data": blog
    });
});


// Add Blog
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
        
        let blog = await Blogs.findOne({url: req.body.url});
        if(blog) {
            return res.json({
                "success": false,
                "message": "Blog already exists",
            });
        }
        
        blog = new Blogs({
            categories: req.body.categories,
            title: req.body.title,
            content: req.body.content,
            featured_image: featuredImageFile,
            url: req.body.url,
            tags: JSON.parse(req.body.tags),
            status: req.body.status,
            added_by: req.user._id,
        });
        
        await blog.save();
        
        res.json({
            "success": true,
            "message": "Blog added successfully"
        });
    
    } catch (err) {
        console.log(err);
        res.json({
            "success": false,
            "message": `Could not upload the file: ${req.file.originalname}. ${err}`
        });
    }
});

// Update Blog
router.put('/:id', authentication, async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let blog = await Blogs.findOne({_id: Object(req.params.id) });
    if(!blog) {
        return res.json({
            "success": false,
            "message": "Blog not exists",
        });
    }
    
    let query = { _id: Object(req.params.id) };
    blog['categories']     = req.body.categories;
    blog['title']          = req.body.title;
    blog['content']        = req.body.content;
    
    if(req.files) {
        // File
        let featured_image = req.files.featured_image;
        let uploadPath = Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(featured_image.name)
        const featuredImageFile = featured_image.name + '-' + uploadPath
        uploadPath = './../../public/uploads/' + featured_image.name + '-' + uploadPath
        
        uploadFile(featured_image, uploadPath)

        blog['featured_image'] = featuredImageFile;
    }
    blog['tags']   = JSON.parse(req.body.tags);
    blog['url']    = req.body.url;
    blog['status'] = req.body.status;
    delete blog['_id'];
    delete blog['added_by'];
    delete blog['created_on'];
    await Blogs.updateOne(query, blog);

    res.json({
        "success": true,
        "message": "Blog updated successfully"
    });
});


// Delete Blog
router.delete('/:id', authentication, async (req, res) => {
    
    let blog = await Blogs.findOne({_id: Object(req.params.id) });
    
    if(!blog) {
        return res.json({
            "success": false,
            "message": "Blog not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    await Blogs.deleteOne(query);

    res.json({
        "success": true,
        "message": "Blog deleted successfully"
    });
});

// Get BLogs By Url
router.get('/front/byurl/:url', async (req, res) => {
    
    let page = await Blogs.findOne({url: req.params.url});
    
    res.json({
        "success": true,
        "data": page
    });
});

// Get Blog for front
router.get('/front/list', async (req, res) => {
    
    let blog = await Blogs.find();
    
    res.json({
        "success": true,
        "data": blog
    });
});

module.exports = router;
