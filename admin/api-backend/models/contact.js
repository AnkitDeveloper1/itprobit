const Joi = require('joi');
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    company_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    phone_number: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    country: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    budget: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    message: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    created_on: {
        type : Date,
        default: Date.now
    }
})

const ContactUs = mongoose.model("contacts", contactSchema);


function validateContact(contact) {
    const schema= Joi.object({
        name: Joi.string().min(2).max(50).required(),
        company_name: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(2).max(255).required(),
        phone_number: Joi.string().min(2).max(255).required(),
        country: Joi.string().min(2).max(255).required(),
        budget: Joi.string().min(2).max(255).required(),
        message: Joi.string().min(2).max(255).required(),
    });
    return schema.validate(contact, {abortEarly: false});
}

exports.ContactUs = ContactUs;
exports.validate = validateContact;
