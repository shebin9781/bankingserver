const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("mongodb Atlas connected with server");
        
    }
).catch(err=>{
    console.log("connection falied!!!");
    console.log(err);
    
    
})