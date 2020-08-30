const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('this is first')

})
app.get('/about',(req,res)=>{
    res.send('this is get request first about ')

})
app.post('/about',(req,res)=>{
    res.send('Hi I am using post request ')
})
app.get('/status',(req,res)=>{
    res.status(404).send('Hi I am sending status code 404')
})

port = 3000
app.listen(port,()=>{
    console.log(`applictaion listening  to ${port}`)
});