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


mongoose.connect('mongodb://localhost:27017/admin',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})
db.once('open',() =>{
    console.log("Database connection Established")
})

app.listen((PORT), () => {
    console.log(`server start on http://localhost/${PORT}`)
})

app.use('/api/employee',Employeroute)