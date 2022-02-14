const Joi      = require('joi');
const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken');
const config   = require('config');

const blogsSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
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
    tags: {
        type: Array,
        required: true,
    },
    added_on: {
        type: Date,
        default: new Date()
    }
});

const Blogs = mongoose.model('blogs', blogsSchema);


function validateBlogs(blogs) {
    const schema= Joi.object({
        title: Joi.string().min(5).max(255).required(),
        content: Joi.string().required(),
        tags: Joi.array().required(),
    });
    return schema.validate(blogs, {abortEarly: false});
}

exports.Blogs = Blogs;
exports.validate = validateBlogs;