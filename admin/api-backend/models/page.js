const Joi = require('joi');
const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    url: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    layout: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    section_one_heading: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    section_one_content: {
        type: String,
        required: true
    },
    section_two_heading_1: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    section_two_content_1: {
        type: String,
        required: true
    },
    section_two_heading_2: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    section_two_content_2: {
        type: String,
        required: true
    },
    section_two_heading_3: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    section_two_content_3: {
        type: String,
        required: true,
    },
    section_three_title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    section_three_content: {
        type: String,
        required: true
    },
    section_three_list: {
        type: Array,
        required: true,
    },
    section_three_image: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    section_four_title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    section_four_content: {
        type: String,
        required: true
    },
    section_four_list: {
        type: Array,
        required: true
    },
    section_four_image: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    status: {
        type: String,
        enum: ['enabled', 'disabled'],
        default: 'enabled'
    },
    added_by: {
        type: Object,
        required: true
    },
    created_on: {
        type : Date,
        default: Date.now
    }
})

const Page = mongoose.model("pages", pageSchema);


function validatePage(page) {
    const schema= Joi.object({
        type: Joi.string().min(5).max(255).required(),
        title: Joi.string().min(5).max(255).required(),
        url: Joi.string().min(5).max(255).required(),
        layout: Joi.string().min(5).max(50).required(),
        section_one_heading: Joi.string().min(5).max(255).required(),
        section_one_content: Joi.string().required(),
        section_two_heading_1: Joi.string().min(5).max(255).required(),
        section_two_content_1: Joi.string().required(),
        section_two_heading_2: Joi.string().min(5).max(255).required(),
        section_two_content_2: Joi.string().required(),
        section_two_heading_3: Joi.string().min(5).max(255).required(),
        section_two_content_3: Joi.string().required(),
        section_three_title: Joi.string().min(5).max(255).required(),
        section_three_content: Joi.string().required(),
        section_three_list: Joi.required(),
        //section_three_image: Joi.string().min(5).max(255).required(),
        section_four_title: Joi.string().min(5).max(255).required(),
        section_four_content: Joi.string().required(),
        section_four_list: Joi.required(),
        //section_four_image: Joi.string().min(5).max(255).required(),
        status: Joi.required(),
    });
    return schema.validate(page, {abortEarly: false});
}

exports.Page = Page;
exports.validate = validatePage;
