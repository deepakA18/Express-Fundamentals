const express = require('express');
const app = express();
const morgan = require('morgan')

const logger = require('./logger')
const authorize = require('./authorize')
//middleware: req -> middleware -> res 

//1. use vs route
//2. options - own/express/third party

// app.use([authorize,logger])      //app.use takes [path,callback], order of placing app.use matters while execution

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
  res.send('Home')
})

app.get('/about',(req,res)=>{
  res.send('About')
})

app.get('/products',(req,res)=>{
  res.send('Products')
})

app.get('/items',(req,res)=>{
  res.send('Items')
})




app.listen(5000,(req,res)=>{
    console.log('Server is running on 5000...')
})