const users = require("../model/userModels");

exports.register = async (req,res)=>{
    console.log("register Request!!!");
    const {username,email,password} = req.body
  
    console.log(username,email,password);
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("user already exists")
        }else{
            const newUser = new users({
                username,email,password,bankname:"",accountnumber:"",IFCS:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
    
   
    
}