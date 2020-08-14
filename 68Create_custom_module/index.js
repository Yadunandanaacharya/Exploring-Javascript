const mod = require('./Module')

/////////////////////////////////////////////////
// const average = require('./Module')
///////////////////////////////////////////////
// Here above line works like import pandas as pd
// We have used "./" to get from same path or else you will get error

//////////////////////////////////////////////////
// console.log('Our average is ',average([2,3,4,5]))
//////////////////////////////////////////////////
console.log('This is Index.js')

console.log('Using multiple functions from module',mod.avg([2,3,4]),mod.nameis('Yadu'));
console.log('I am using',mod.repo, 'repository')

