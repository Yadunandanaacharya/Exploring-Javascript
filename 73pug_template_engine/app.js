const express = require('express')
const app = express()
const port = 3000
const path =  require('path')

//Express Stuffs
app.use('/static',express.static('static')); //for serving static files


//Pug Stuffs
app.set('view engine','pug'); //set the template engine as pug.
app.set('views', path.join(__dirname,'views'));



//End points
app.get('/',(req,res)=>{
    const con = 'This is the best content we need to play Chess'
    const params = {'title':'Chess is the best game',"content": con};
    res.status(200).render('index.pug',params);
})

//Start the server
app.listen(port,()=>{
    console.log(`applictaion listening  to ${port}`)
}); 