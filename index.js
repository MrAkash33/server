const express = require('express')
const mongoose = require('mongoose')
// const morgan = require('morgan')
const bodyParser = require('body-parser')
const Employeroute = require('./routes/employeeroute')
const { PORT } = require('./global/constant')
// const homeroute = require("./controllers/Home")
// const loginroute = require("./controllers/Login");
// app.use("/", homeroute)
// app.use("/", loginroute)

const app = express();


app.use(bodyParser.json());
// DB Connection


const mongoosLive = async () =>{
   try{
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.evmfzf4.mongodb.net/user?retryWrites=true&w=majority')
       console.log("Established");
   }
    catch(err){
        console.log("not Connected",err);
    }
}
mongoosLive()
// mongoose.connect('mongodb+srv://admin:admin@cluster0.evmfzf4.mongodb.net/user?retryWrites=true&w=majority')
// const db = mongoose.connection

// db.on('error',(err)=>{
//     console.log(err)
// })
// db.once('open',() =>{
//     console.log("Database connection Established")
// })

app.listen((PORT), () => {
    console.log(`server start on http://localhost/${PORT}`)
})

app.use('/api/employee',Employeroute)
