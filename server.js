//importing
const express = require('express');



//appconfig
const app=express()
const port=process.env.PORT || 9000
//middleware

//DB config

//????

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'))

//listen
app.listen(port,()=>console.log(`listening on localhost:${port}`))