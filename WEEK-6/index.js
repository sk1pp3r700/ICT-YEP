const express = require('express')
const app = express()
const port = 5000;
const path = require('path')

// app.get('/', (req, res) => {
//   res.send('<h2>SKIPPERS SITE</h2>')
// })

app.get('/' ,(req, res) => {
    res.sendFile(path.join(__dirname, "public" ,  "index.html"));
})

const users = [{name: 'John', age: 34},
{name: 'Mary', age: 33 }]

app.get("/json" , (req, res) => {
res.json(users)
})

app.get('*' ,(req, res) => {
    res.send("404 Not Found")});

app.listen(port, () => {
console.log(`server broadcasting on http://127.0.0.1:${port}`)})