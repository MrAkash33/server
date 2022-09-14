const Registration = require('../models/Registration')
const bcrypt = require('bcrypt');
const Register = (req,res,next) =>{
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const dataSave = async ()=>{
        const salt = await bcrypt.genSalt(10);
        const hashPassed = await bcrypt.hash(password,salt)
        let users = new Registration ({
            email:email,
            username:username,
            password:hashPassed
         })
         users.save();
         res.json({
            users
         }) 
    }

    if(password !== confirmPassword){
        res.json({
            message:"Password and Confirm password does not Matched"
        })
    }else{
        dataSave();
    }
 }

module.exports = {
    Register
}