const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    designation : {
        type:String,
        required: true,
    },
    email : {
        type:String,
        required:true
    },
    phone:{
        type:String,
        required: true,
    },
    age:{
        type:Number
    }
},{timestamps:true})

const Employee = mongoose.model('Employee',employeSchema)
module.exports = Employee