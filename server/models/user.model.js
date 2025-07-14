const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength: 20
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        maxLength:10,
    },
    profilePic:String,

    lastLogin:Date,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
},{timestamps:true,versionKey:false})

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;