// var http = require('http');
// var fs = require('fs');

// const PORT=8080; 

// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });


const http = require('http');
const fs = require('fs').promises

const hostname = '127.0.0.1'
const port = 9000

fs.readFile('./Users/backendclass1/Documents/ICT-YEP/WEEK-1/index.html', function (err, html){
    if(err)
    throw err;
})

const server = http.createServer((req, res)=> {
res.statusCode = 200
res.setHeader('Content-Type', 'text/html charset=utf-8')
res.end(html)
})

server.listen(port, hostname,()=>{
    console.log('server is running at http://${127.0.0.1}: ${9000}/')
})