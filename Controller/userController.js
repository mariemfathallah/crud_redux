const UserSchema = require('../models/User')


//add user
exports.addUser = async(req,res)=>{
    try{
const {fullname,email,role} =req.body
let newUser = new UserSchema({
    fullname,
    email,
    role
})
await newUser.save()
res.status(200).send(newUser)
    }catch(err){
        res.status(500).json({error:err})
    }

}
//update user
exports.updateUser = async(req,res)=>{
    try{

const  params = req.params.id

const{fullname,email,role}=req.body

let modifUser= {
    fullname,
    email,
   role
}
await UserSchema.findByIdAndUpdate(params,modifUser)
res.status(200).send(modifUser)
    }
    catch(err){
        res.status(500).json({error:err})
    }
}


//delete user 


exports.deleteUser= async(req,res)=>{
    try{
     const   params= req.params.id
await UserSchema.findByIdAndDelete(params)
res.status(200).json({message:'user deleted with success'})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

//affiche users getUsers

exports.getUsers = async(req,res)=>{
    try{
    const User =     await UserSchema.find()
    res.status(200).send(User)

    }
    catch(err){
        res.status(500).json({error:err})
    }

}