const { application } = require('express')
const Employee = require('../models/user')

const index = (req,res,next) => {
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An Error Occured!'
        })
    })
}

const show = (req,res,next) =>{
    let employeeId = req.params.id;
    Employee.findById(employeeId)
    .then(response =>{
        res.json({
            response
        })
    }).catch(error =>{
        res.json({
            message:`error accured in id ${employeeId}`
        })
    })
}

// Add New Employee
const store = (req,res,next) =>{
    console.log("hii am called")
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    // if(employee.name == 'name' && employee.designation == 'des')
    console.log(req.body,"reqbody")
    employee.save()
    .then(response=>{
        res.json({
            message:"Employee Addes Successfully;"
        })
    })
    .catch(error=>{
        res.json({
            message:"An Eror Accured"
        })
    })
}
// Update employee by id
 const update =(req,res,next)=>{
    let employeeId = req.params.id
    let updatedData ={
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }
    Employee.findByIdAndUpdate(employeeId, {$set:updatedData})
    .then(()=>{
        res.json({
            message:'Employee Updated'
        })
    })
    .catch(error=>{
        res.json({
            message:"An error Occures"
        })
    })
 }

 //delete an employee

 const destroy = (req,res,next) =>{
    let employeeId = req.body.id
    Employee.findByIdAndDelete(employeeId)
    .then(() =>{
        res.json({
            message:"Employe Deleted"
        })
    })
    .catch(error =>{
        res.json({
            message:"An error Occured"
        })
    })
 }

 module.exports={
    index,show,store,update,destroy
 }