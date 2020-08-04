// console.log('Hellow world')
// Go to nodejs website click on About, copy code present over there, below is 
// that one itself
// Important: Below you will get ""Server running at http://127.0.0.1:3000/""
// hover your moude over that, text appera ctrl+click, when you press
// withpressing ctrl server opens printing hello world

// To restart terminal, in output window at the right side delete symbol is there
// means kill terminal button is there press on that andd agin run this file
// browser will update latest contents

// Node repl means read evaluate print loop

// type node in terminal, enter one number 34, next type _ and press enter
// 34 value will be printed which is stored as previous

// If you press tab twice in terminal aafter tgoin inside of node by typing
// Node, then all global variable will be displayed
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Helloooooooooooo');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

