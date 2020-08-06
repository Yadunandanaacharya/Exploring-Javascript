const http = require('http')
const fs = require('fs')  
// require is used to import fs or http module, similar 
// to import pandas in Python
const fileContent = fs.readFileSync('66jsused.html')

/*callback function*/
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent)
})     

// Content-type':'text/html: tells that file type is html
// writeHead means in header put text/html
// 200 responses

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening on port 80')
});

// Important: when you type 127.0.0.1 in browser contents of 66jsused.html 
// will be displayed in web page

// If you write port number as 8000 then when you will run "127.0.0.1"
// this is browser nothong will be displayed
// that time you need to type like 127.0.0.1:8000