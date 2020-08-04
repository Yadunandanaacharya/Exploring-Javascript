// console.log('Hellow world')
// Go to nodejs website click on About, copy code present over there, below is 
// that one itself
// Important: Below you will get ""Server running at http://127.0.0.1:3000/""
// hover your moude over that, text appera ctrl+click, when you press
// withpressing ctrl server opens printing hello world

// To restart terminal, in output window at the right side delete symbol is there
// means kill terminal button is there press on that andd agin run this file
// browser will update latest contents
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Strings</title>
  </head>
  <body>
      <div class="container">
          <div id="content"></div>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam?</p>
      </div>
      <script>
          var myname = 'My name '
          var is = 'is '
          var name = 'Yadunandana'
          var skill = 'Programming'
          // Using fill in the blank with '$' symbol
          var temp = `${name} is very good in ${skill}`;
          var len = name.length
          console.log(myname + is + name)
          console.log(temp)
          console.log(`this is length of string var len ${len}`)
          
  
          console.log('Hello world \n Yadu') /* USing escape sequence character*/
          // In above Yadu is printed in next line
          console.log('Hello \t using slash T which is tab and \b backspace is here')
  
  
          // Making string constructors using var
          var y = new String("This is string")
          console.log('String using string constructor, press on > symbol in web page',y)
      
      // String methods
      document.getElementById('content').innerHTML='<h3> This is an h3 heading</h3>'
      </script>
  </body>
  </html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});