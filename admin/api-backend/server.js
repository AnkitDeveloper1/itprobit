const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
require("./db/database")();

const app = express();

const auth = require("./routes/auth");
const users = require("./routes/users");
const categories = require("./routes/categories");
const portfolio = require("./routes/portfolio");
const reviews = require("./routes/reviews");
const pages = require("./routes/pages");
const blogsCategories = require("./routes/blogsCategories");
const blogs = require("./routes/blogs");
const contact = require("./routes/contact");

app.use(fileupload());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.options("*", cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200 }, { origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }, { origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.use('/api/auth', auth);
app.use('/api/user', users);
app.use('/api/categories', categories);
app.use('/api/portfolio', portfolio);
app.use('/api/reviews', reviews);
app.use('/api/pages', pages);
app.use('/api/blogs_categories', blogsCategories);
app.use('/api/blogs', blogs);
app.use('/api/contact', contact);

// Created the server
const server = app.listen(8080)

module.exports = server;
