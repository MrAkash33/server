const express = require('express')
const bodyParser = require('body-parser')
const Employeroute = require('./routes/route')
const { PORT } = require('./global/constant')
const mongoConnection = require('./config/mongoConnection')

const app = express();

mongoConnection()
app.use(bodyParser.json());
// DB Connection

app.listen((PORT), () => {
    console.log(`server start on http://localhost/${PORT}`)
})

app.use('/api',Employeroute)
