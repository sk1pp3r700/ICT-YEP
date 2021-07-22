const express = require('express')
const app = express()
const port = 5000;
const userRoutes = require('./routes/userRoutes')
const router = express.Router();
const dotenv = require('dotenv')
const db = require('./config/db')

// configure dotenv for environment variable
dotenv.config({ path: "./config.env" });

app.get('/', (req, res) => {
    res.send('<h2>JW-AUTH</h2>')})

app.use(express.json())

app.use("/api/v1/user", userRoutes);

// db()

module.exports =router;

app.listen(port, () => {
    console.log(`SERVING ON on http://127.0.0.1:${port}`)})