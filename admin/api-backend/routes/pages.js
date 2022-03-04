const {Page, validate} = require('../models/page');
const express = require('express');
const router = express.Router();
const path = require('path');
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
        let threeImageFile = "";
        let fourImageFile = "";
        let uploadedFiles = [];
        if(req.body.layout === "layout_1") {
            if (!req.files || Object.keys(req.files).length === 0) {
                return res.json({
                    "success": false,
                    "message": "No files were uploaded!",
                });
            }
            // Three Section Image
            let section_three_image = req.files.section_three_image;
            let uploadPath = Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(section_three_image.name)
            const threeImageFile = section_three_image.name + '-' + uploadPath
            uploadPath = './../../public/uploads/' + section_three_image.name + '-' + uploadPath
            
            uploadFile(section_three_image, uploadPath)

            // Four Section Image
            let section_four_image = req.files.section_four_image;
            uploadPath = Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(section_four_image.name)
            const fourImageFile = section_four_image.name + '-' + uploadPath
            uploadPath = './../../public/uploads/' + section_four_image.name + '-' + uploadPath
            
            uploadFile(section_four_image, uploadPath)
        } else {
            req.files.section_image.forEach((value, key) => {
                uploadPath = Date.now() + '-' + Math.round(Math.random() * 1E9)+"-"+key+path.extname(value.name);
                uploadedFiles[key] = value.name + '-' + uploadPath
                uploadPath = './../../public/uploads/' + value.name + '-' + uploadPath
                
                uploadFile(value, uploadPath)
            });
        }
        
        const {error} = validate(req.body);
        if(error) return res.json({
            "success": false,
            "errors": error.details,
        });
        
        let page = await Page.findOne({url: req.body.url});
        if(page) {
            return res.json({
                "success": false,
                "message": "Page url already exists",
            });
        }

        let page_data = {};
        if(req.body.layout === "layout_1") {
            page_data = {
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
                section_three_list: JSON.parse(req.body.section_three_list),
                section_three_image: threeImageFile,
                section_four_title: req.body.section_four_title,
                section_four_content: req.body.section_four_content,
                section_four_list: JSON.parse(req.body.section_four_list),
                section_four_image: fourImageFile,
                status: req.body.status,
                added_by: req.user._id,
            };
        } else {
            page_data = {
                type: req.body.type,
                title: req.body.title,
                url: req.body.url,
                layout: req.body.layout,
                section_one_heading: req.body.section_one_heading,
                section_one_content: req.body.section_one_content,
                align_image_left: req.body.align_image_left?JSON.parse(req.body.align_image_left):[],
                section_image: uploadedFiles,
                section_title: req.body.section_title?JSON.parse(req.body.section_title):[],
                section_content: req.body.section_content?JSON.parse(req.body.section_content):[],
                section_listing: req.body.section_listing?JSON.parse(req.body.section_listing):[],
                status: req.body.status,
                added_by: req.user._id,
            };
        }
        page = new Page(page_data);
        
        await page.save();
        
        res.json({
            "success": true,
            "message": "Page added successfully"
        });
    
    } catch (err) {
        console.log(err);
        res.json({
            "success": false,
            "message": `Could not upload the file`
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
    
    let uploadedFiles = page.section_image;
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
    page['section_three_list']    = JSON.parse(req.body.section_three_list);
    if(req.files !== null && req.files.section_three_image !== undefined) {
        // Three Section Image
        let section_three_image = req.files.section_three_image;
        let uploadPath = Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(section_three_image.name)
        const threeImageFile = section_three_image.name + '-' + uploadPath
        uploadPath = './../../public/uploads/' + section_three_image.name + '-' + uploadPath
        
        uploadFile(section_three_image, uploadPath)

        page['section_three_image'] = threeImageFile
    }
    page['section_four_title']    = req.body.section_four_title;
    page['section_four_content']  = req.body.section_four_content;
    page['section_four_list']     = JSON.parse(req.body.section_four_list);
    if(req.files !== null && req.files.section_four_image !== undefined) {
        // Four Section Image
        let section_four_image = req.files.section_four_image;
        uploadPath = Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(section_four_image.name)
        const fourImageFile = section_four_image.name + '-' + uploadPath
        uploadPath = './../../public/uploads/' + section_four_image.name + '-' + uploadPath
        
        uploadFile(section_four_image, uploadPath)

        page['section_four_image']    = fourImageFile;
    }

    // Second Layout
    page['align_image_left'] = req.body.align_image_left?JSON.parse(req.body.align_image_left):[];
    page['section_title'] = req.body.section_title?JSON.parse(req.body.section_title):[];
    page['section_content'] = req.body.section_content?JSON.parse(req.body.section_content):[];
    page['section_listing'] = req.body.section_listing?JSON.parse(req.body.section_listing):[];
    if(req.files !== null && req.files.section_image !== undefined) {
        req.files.section_image.forEach((value, key) => {
            uploadPath = Date.now() + '-' + Math.round(Math.random() * 1E9)+"-"+key+path.extname(value.name);
            uploadedFiles[key] = value.name + '-' + uploadPath
            uploadPath = './../../public/uploads/' + value.name + '-' + uploadPath
            
            uploadFile(value, uploadPath)
        });
    }
    page['section_image'] = uploadedFiles,

    page['status'] = req.body.status;
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

// Get Page By Url
router.get('/front/:url', async (req, res) => {
    
    let page = await Page.findOne({url: req.params.url});
    
    res.json({
        "success": true,
        "data": page
    });
});

// Get Page By Url
router.get('/front/bytype/:type', async (req, res) => {
    
    let page = await Page.find({type: req.params.type});
    
    res.json({
        "success": true,
        "data": page
    });
});


module.exports = router;
