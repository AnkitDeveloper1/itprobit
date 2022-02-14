const Joi      = require('joi');
const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken');
const config   = require('config');

const portfolioCategoriesSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    is_status: {
        type: String,
        required: true,
        enum: ['enabled', 'disabled'],
        
    },
    added_on: {
        type: Date,
        default: new Date()
    }
});

const PortfolioCategories = mongoose.model('portfolio_categories', portfolioCategoriesSchema);


function validatePortfolioCategories(portfolio) {
    const schema= Joi.object({
        name: Joi.string().min(5).max(255).required(),
        is_status: Joi.string().required(),
    });
    return schema.validate(portfolio, {abortEarly: false});
}

exports.PortfolioCategories = PortfolioCategories;
exports.validate = validatePortfolioCategories;