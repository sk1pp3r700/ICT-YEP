var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
  res.send('Welcome to MY SITE!');  
});  
var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })