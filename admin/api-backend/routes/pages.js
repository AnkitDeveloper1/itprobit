const {Page, validate} = require('../models/page');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');
const uploadFile = require("../middleware/upload");

// Get Pages
router.get('/', authentication, async (req, res) => {
    
    let pages = await Page.find();
    
    res.json({
        "success": true,
        "data": pages
    });
});

// Get Page
router.get('/:id', authentication, async (req, res) => {
    
    let page = await Page.findOne({_id: req.params.id});
    
    res.json({
        "success": true,
        "data": page
    });
});

// Add Page
router.post('/', authentication, async (req, res) => {
    try {
        await uploadFile.single('section_three_image');
        await uploadFile.single('section_four_image');
        
        if (req.files === undefined) {
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
        
        let page = await Page.findOne({title: req.body.title});
        if(page) {
            return res.json({
                "success": false,
                "message": "Page already exists",
            });
        }
        
        page = new Page({
            type: req.body.type,
            title: req.body.title,
            url: req.body.url,
            layout: req.body.layout,
            section_one_heading: req.body.section_one_heading,
            section_one_content: req.body.section_one_content,
            section_two_heading_1: req.body.section_two_heading_1,
            section_two_content_1: req.body.section_two_content_1,
            section_two_heading_2: req.body.section_two_heading_2,
            section_two_content_2: req.body.section_two_content_2,
            section_two_heading_3: req.body.section_two_heading_3,
            section_two_content_3: req.body.section_two_content_3,
            section_three_title: req.body.section_three_title,
            section_three_content: req.body.section_three_content,
            section_three_list: req.body.section_three_list,
            section_three_image: req.files.section_three_image.name,
            section_four_title: req.body.section_four_title,
            section_four_content: req.body.section_four_content,
            section_four_list: req.body.section_four_list,
            section_four_image: req.files.section_four_image.name,
            status: req.body.status,
            added_by: req.user._id,
        });
        
        await page.save();
        
        res.json({
            "success": true,
            "message": "Page added successfully"
        });
    
    } catch (err) {
        console.log(err);
        res.json({
            "success": false,
            "message": `Could not upload the file: ${req.file.originalname}. ${err}`
        });
    }
});

// Update Page
router.put('/:id', authentication, async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let page = await Page.findOne({_id: Object(req.params.id) });
    if(!page) {
        return res.json({
            "success": false,
            "message": "Page not exists",
        });
    }
    
    let query = { _id: Object(req.params.id) };
    page['type']                  = req.body.type;
    page['title']                 = req.body.title;
    page['url']                   = req.body.url;
    page['layout']                = req.body.layout;
    page['section_one_heading']   = req.body.section_one_heading;
    page['section_one_content']   = req.body.section_one_content;
    page['section_two_heading_1'] = req.body.section_two_heading_1;
    page['section_two_content_1'] = req.body.section_two_content_1;
    page['section_two_heading_2'] = req.body.section_two_heading_2;
    page['section_two_content_2'] = req.body.section_two_content_2;
    page['section_two_heading_3'] = req.body.section_two_heading_3;
    page['section_two_content_3'] = req.body.section_two_content_3;
    page['section_three_title']   = req.body.section_three_title;
    page['section_three_content'] = req.body.section_three_content;
    page['section_three_list']    = req.body.section_three_list;
    if(req.files !== null && req.files.section_three_image !== undefined) {
        await uploadFile.single('section_three_image');
        
        if (req.files === undefined) {
            return res.json({
                "success": false,
                "message": "Please upload a file!",
            });
        }
        page['section_three_image']   = req.files.section_three_image.name;
    }
    page['section_four_title']    = req.body.section_four_title;
    page['section_four_content']  = req.body.section_four_content;
    page['section_four_list']     = req.body.section_four_list;
    if(req.files !== null && req.files.section_four_image !== undefined) {
        await uploadFile.single('section_four_image');
        
        if (req.files === undefined) {
            return res.json({
                "success": false,
                "message": "Please upload a file!",
            });
        }
        page['section_four_image']    = req.files.section_four_image.name;
    }
    page['status']                = req.body.status;
    delete page['_id'];
    delete page['added_by'];
    delete page['created_on'];
    await Page.updateOne(query, page);

    res.json({
        "success": true,
        "message": "Page updated successfully"
    });
});


// Delete Page
router.delete('/:id', authentication, async (req, res) => {
    
    let page = await Page.findOne({_id: Object(req.params.id) });
    
    if(!page) {
        return res.json({
            "success": false,
            "message": "Page not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    await Page.deleteOne(query);

    res.json({
        "success": true,
        "message": "Page deleted successfully"
    });
});


module.exports = router;
