const Joi = require('joi');
const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    content: {
        type: String,
        required: true,
    },
    featured_image: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    categories: {
        type: Object,
        requried:true,
    },
    tags: {
        type: Array,
        required: true,
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

const Blogs = mongoose.model("blogs", blogSchema);


function validateBlog(blog) {
    const schema= Joi.object({
        title: Joi.string().min(2).max(50).required(),
        content: Joi.string().min(2).required(),
        tags: Joi.required(),
        url: Joi.string().min(2).max(50).required(),
        categories: Joi.string().min(2).max(50).required(),
        status: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(blog, {abortEarly: false});
}

exports.Blogs = Blogs;
exports.validate = validateBlog;
