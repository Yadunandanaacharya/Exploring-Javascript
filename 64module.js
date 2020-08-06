// Imp: don't use other variable than "fs and text", you'll get error
// fs and text are constants for file handling if you use other variables
// like items, you'll get error
const fs  = require('fs');
let text = fs.readFileSync('dele_for_64th.txt','utf-8');

// Replacing or editing text in file "dele_for_64th"
text = text.replace('Hahaha','Yadu')

console.log('The content of file is');
console.log(text);

// To write file fs, creating a new file
console.log('Creating a new file');
fs.writeFileSync('Yadu.txt',text)
// Yadu.txt will be created in current folder, in this vscode I have pressed "open folder"
// so my path has set to this Exploring Javascript folder, in that folder Yadu.txt will
// be written
