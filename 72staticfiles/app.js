const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//for serving static files
app.use('/static',express.static('static'))

//set the template engine as pug.
app.set('view engine','pug')

app.set('views', path.join(__dirname,'views'))


//for pug example
app.get('/pugdemo', function (req, res) {
    res.status(200).render('fordemo', { title: 'Hey Yadu', message: 'Hello there!,How are you' })
  })

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

app.listen(port,()=>{
    console.log(`applictaion listening  to ${port}`)
});