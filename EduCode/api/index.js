const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const codeRoute = require('./routes/code');
const bodyParser = require('body-parser')

app.use(bodyParser.json());

dotenv.config();

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(codeRoute)

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});