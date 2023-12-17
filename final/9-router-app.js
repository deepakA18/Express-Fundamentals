const express = require('express');
const app = express();
const people = require('./routes/people');
const login = require('./routes/auth')
//parse form data
app.use(express.urlencoded({extended: false})) //built-in middleware, parses incoming requests with urlencoded payloads and is based on body.parser

app.use(express.static('./methods-public'))

app.use(express.json())

app.use('/api/people',people);
app.use('/login',login);


app.listen(5000,(req,res)=>{
    console.log('Server is running on 5000...')
})