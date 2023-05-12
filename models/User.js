const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')



const UserSchema = new mongoose.Schema(
    {
    fullname:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
          unique:true
    },
    role:{
   
        type: String,
        enum:["user","admin"],
        default:"user",
        required: true,
    }
}, {
    timestamps: { currentTime: () => Date.now() },versionKey: false })

UserSchema.plugin(uniqueValidator)



module.exports =  mongoose.model('Users',UserSchema)