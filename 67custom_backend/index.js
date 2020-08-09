const http =  require('http');
const fs = require('fs');


// visit : https://nodejs.org/en/about/
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');  /*Created in same folders, so that you can */
const about = fs.readFileSync('./about.html'); /*directly mention  name of that file*/
const contacts = fs.readFileSync('./contact.html');
const services = fs.readFileSync('./services.html');

// I could able find Imp error after splitting screen and compare with another code.

// Important: Below you can see 4 lines, where I was getting error
// because I have used different variables here and I was using something
// different variable in programs
// const Home = fs.readFileSync('index.html');  
// const About = fs.readFileSync('./about.html');
// const Contacts = fs.readFileSync('./contact.html');
// const Carrers = fs.readFileSync('./services.html');
// 'Home' is declared but its value is never read.

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
  url = req.url; 

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url == '/'){
    res.end(home)
  }
  else if(url == '/about'){
    res.end(About)
  }
  else if(url == '/contact'){
    res.end(contact)
  }
  else if(url == '/services'){
    res.end(services)
  }
  else{
    res.statusCode = 404;
    res.end('404 not found')
  }
});

// we will put html template in res.end(``)

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})

