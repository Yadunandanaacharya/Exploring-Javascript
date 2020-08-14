console.log('This is for npm node package manager')
console.log('NPM is similar pip in Python')

// press 1) cd ./69
// 2) If nothing comes press ls
// 3) press npm init
// 4) Enter all details as in terminal asks
// finally you will get below json or "package.json" file will get created 
// in same folder

// npm init will initialize as node packag  e

// {
//     "name": "69_npm",
//     "version": "1.0.0",
//     "description": "This is awesome",
//     "main": "no",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [
//       "Hello",
//       "Awesome"
//     ],
//     "author": "Yadu",
//     "license": "ISC"
//   }
  

// Other Important codes:
// npm install express  => to install package
// npm uninstall express
// By mistake if you delete some package then 
// press "npm install"

// To install specific version
// npm install slugify@1.3.5

// To create and keep in dev dependency
// npm install nodemon --save-dev

// To install nodemon globally means available for all projects
// npm install nodemon --global

// You can use nodemon to execute FileList
// Ex: nodemon .\69_npm.js

// You can also use "npm i express" to install package
// "^"" if you use this symbol it will install exact same version of package
// nodemon ^2.0.0 means it will install this version itself.

// if you use ">" means if available it installs greater version

// npm view slugify version