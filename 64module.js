// Imp: don't use other variable than "fs and text", you'll get error
// fs and text are constants for file handling if you use other variables
// like items, you'll get error
const fs  = require('fs')
const text = fs.readFileSync('dele_for_64th.txt','utf-8')
console.log(text)