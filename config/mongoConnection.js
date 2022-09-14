const mongoose = require('mongoose')
// const mongoConnection = () =>{
//     mongoose.connect('mongodb://localhost:27017/admin',{useNewUrlParser:true,useUnifiedTopology:true})
//     const db = mongoose.connection

//     db.on('error',(err)=>{
//         console.log(err)
//     })
//     db.once('open',() =>{
//         console.log("Database connection Established")
//     })
// }

// module.exports = mongoConnection

const mongoConnection = async () =>{
    try{
         await mongoose.connect('mongodb+srv://admin:admin@cluster0.evmfzf4.mongodb.net/user?retryWrites=true&w=majority')
        console.log("Established");
    }
     catch(err){
         console.log("not Connected",err);
     }
 }
 module.exports = mongoConnection