const Joi = require('joi');
const mongoose = require('mongoose');

const reviewsSchema = mongoose.Schema({
    customer: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    message: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    created_on: {
        type : Date,
        default: Date.now
    }
})

const Reviews = mongoose.model("reviews", reviewsSchema);


function validateReviews(reviews) {
    const schema= Joi.object({
        customer: Joi.string().min(2).max(50).required(),
        message: Joi.string().required(),
        platform: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(reviews, {abortEarly: false});
}

exports.Reviews = Reviews;
exports.validate = validateReviews;
