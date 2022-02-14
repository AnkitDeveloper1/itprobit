const Joi      = require('joi');
const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken');
const config   = require('config');

const reviewsSchema =  new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    message: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    added_on: {
        type: Date,
        default: new Date()
    }
});

const Reviews = mongoose.model('reviews', reviewsSchema);


function validateReviews(reviews) {
    const schema= Joi.object({
        customer: Joi.string().min(5).max(255).required(),
        message: Joi.string().required(),
        platform: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(reviews, {abortEarly: false});
}

exports.Reviews = Reviews;
exports.validate = validateReviews;