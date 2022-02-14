const Joi      = require('joi');
const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken');
const config   = require('config');

const portfolioSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    content: {
        type: String,
        required: true
    },
    featured_image: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    bgcolor: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    },
    url: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    categories: {
        type: Array,
        required: true
    },
    added_on: {
        type: Date,
        default: new Date()
    }
});

const Portfolio = mongoose.model('portfolios', portfolioSchema);


function validatePortfolio(portfolio) {
    const schema= Joi.object({
        title: Joi.string().min(5).max(255).required(),
        content: Joi.string().required(),
        bgcolor: Joi.string().min(5).max(15).required(),
        url: Joi.string().min(5).max(255).required(),
        categories: Joi.array().required(),
    });
    return schema.validate(portfolio, {abortEarly: false});
}

exports.Portfolio = Portfolio;
exports.validate = validatePortfolio;