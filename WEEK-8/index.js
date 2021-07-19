const express = require('express')
const app = express()
const port = 5000;
const userRoutes = require('./routes/userRoutes')
const router = express.Router();
const dotenv = require('dotenv').config()

app.use(express.json())

module.exports =router;

app.listen(port, () => {
    console.log(`SERVING ON on http://127.0.0.1:${port}`)})