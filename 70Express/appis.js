// You can install packages globally in command prompt
const express = require('express')

const app = express();
const port = 80;
app.get("/", (req,res)=>{
    res.send('This is my first express app')
});

 app.listen(port,  ()=>{
     console.log(`The application started successfully on port ${port}`)
 })