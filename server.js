//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js'



//appconfig
const app=express()
const port=process.env.PORT || 3001
//middleware

//DB config
const connection_url="mongodb+srv://abhishekverma:vof30qU3hOmuoIR8@cluster0.mxajjdp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection_url);

//????

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'))

app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body
Messages.create(dbMessage,(err,data)=>{
    if (err){
        res.status(500).send(err)
    }
    else {
        res.status(201).send(`new message created:\n${data}`)
    }
})

})


//listen
app.listen(port,()=>console.log(`listening on localhost:${port}`))