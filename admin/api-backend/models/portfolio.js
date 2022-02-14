const Joi = require('joi');
const mongoose = require('mongoose');

const portfolioSchema = mongoose.Schema({
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
    bgcolor: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    url: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    categories: {
        type: Array,
        requried:true,
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

const Portfolio = mongoose.model("portfolios", portfolioSchema);


function validatePortfolio(portfolio) {
    const schema= Joi.object({
        title: Joi.string().min(2).max(50).required(),
        content: Joi.string().min(2).max(50).required(),
        bgcolor: Joi.string().min(2).max(50).required(),
        url: Joi.string().min(2).max(50).required(),
        categories: Joi.string().min(2).max(50).required(),
        status: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(portfolio, {abortEarly: false});
}

exports.Portfolio = Portfolio;
exports.validate = validatePortfolio;
