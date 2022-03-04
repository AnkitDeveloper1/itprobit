const {ContactUs, validate} = require('../models/contact');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Submit Contact Form
router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });

    let contact = new ContactUs({
        name: req.body.name,
        company_name: req.body.company_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        country: req.body.country,
        budget: req.body.budget,
        message: req.body.message,
    });

    await contact.save();
    
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS

        auth: {
            user: 'ankitthaparbt@gmail.com',
            pass: 'Ankit123.'
        }
    });

    var mailOptions = {
        from: 'ankitthaparbt@gmail.com',
        to: 'ankitthaparbt@gmail.com',
        subject: 'Contact Us',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.json({
                "success": false,
                "message": "Something Went Wrong"
            });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({
                "success": true,
                "message": "Email Send Successfully"
            });
        }
    });
});


module.exports = router;