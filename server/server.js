const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const config = require('config');
const express = require('express')
const app = express()

const auth = require('./routes/auth');
const user = require('./routes/users');
const portfolio = require('./routes/portfolio');
const portfolioCategories = require('./routes/portfoliocategories');
const blogs = require('./routes/blogs');
const reviews = require('./routes/reviews');

if(!config.get('jwtprivateket')) {
    console.log("No define jwtprivateket");
    process.exit();
}

app.use(express.static('public'));

// Create connection with mongoose DB
mongoose.connect('mongodb://localhost/itprobit')
.then(() => console.log("Database connected"))
.catch(error => console.log("Database connected", error));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());


// APIs
app.use('/api/auth', auth);
app.use('/api/register', user);
app.use('/api/portfolio', portfolio)
app.use('/api/portfolio/categories', portfolioCategories)
app.use('/api/blogs', blogs)
app.use('/api/reviews', reviews)

// Created the server
app.listen(3001)
