// You can install packages globally in command prompt
// post man : he 


const express = require('express')
const { request } = require('http')

const app = express();
const port = 3000;
app.get("/", (req,res)=>{
    res.send('This is my first express app')
});

 app.listen(port,  ()=>{
     console.log(`The application started successfully on port ${port}`)
 })