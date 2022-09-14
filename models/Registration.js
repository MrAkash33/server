const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RegistrationSchema = new  Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const Registration = mongoose.model('Registration',RegistrationSchema)

module.exports = Registration