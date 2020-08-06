const http =  require('http');
const fs = require('fs');


// visit : https://nodejs.org/en/about/
const hostname = '127.0.0.1';
const port = 3000;
const Home = fs.readFileSync('index.html');
const About = fs.readFileSync('About.html');
const Contacts = fs.readFileSync('Contacts.html');
const Carrers = fs.readFileSync('Carrers.html');

// arrow function


// const server = http.createServer((req,res)=>{
//   console.log(req.url)

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });


// Below output will be printed due to console.log(req.url)
// /
// /favicon.ico

const server = http.createServer((req,res)=>{
  console.log(req.url)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World');
});

// we will put html template in res.end(``)

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})

