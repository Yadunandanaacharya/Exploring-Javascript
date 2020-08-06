// If any code executes line by line then it is called as synchronus coding.
// Synchronus or blocking

// const { read } = require("fs/promises")
// const { readFileSync } = require("fs")

// aSynchronus or nonblocking
// In async line by line execution not guaranteed, callbacks will fire execution
// in last file 64module.js

// const fs  = require('fs');
// let text = fs.readFileSync('dele_for_64th.txt','utf-8');

// her in above code readFileSync code line doesnot run until file will be read,
// after exexutuing require('fs') line only cotinue executing program, if not
// don't continue further

// example for synchronus blocking



/* const fs  = require('fs');
 let text = fs.readFile('dele_for_64th.txt','utf-8');
 console.log('This is a message') */



// You'll get error if you do "readFileSync" to "readFile"
// Because it will expect call back function



// const fs  = require('fs');
// let text = fs.readFile('dele_for_64th.txt','utf-8', (a,b)=>{
//     console.log(a,b)
// });
// console.log('This is a message') 



/*now it'll execute with showing output like:
This is a message
null Writing in Browser JS  and developer console.
Hai I'm printing texts of this file in other js file.*/



// go to link read file nodejs you'll get one function there for reading file
// https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
/*
fs = require('fs')
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
}); this is fucntion callback, but we are using arrow function*/



const fs  = require('fs');
fs.readFile('dele_for_64th.txt','utf-8', (err,data)=>{
    console.log(err,data)
});
console.log('This is a message') 


/* here above important thing 'This is a message' is printing first later contenets of file
are printed, this is only called asynchronus non-blocking.*/

/*this readfile function will run whenever it wants due to callback function we hae
used with arrow function*/

/*example small baby is not eating his dinner, so you will tell him that if he eats his 
dinner then only you will give him chocolate this example of blocking code

another example dinner is empty  */