const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        maxLength:[100,"Title cannot be more than 100 characters"]
    },
    author:{
        type:String,
        required:true,
        maxLength:[80,"Author name cannot be more than 100 characters"]
    },
    description:{
        type:String,
        maxLength:[1000,"Description cannot be more than 1000 characters"]
    },
    converImage:{
        type:String,
        default:"https://placehold.co/480x480"
    },
    availablity:{
        type:Boolean,
        default:true
    },
    createdAt:Date,
    updatedAt:Date
},{versionKey:false,timestamps:true});


const BookModel = mongoose.model("Book",bookSchema);;
module.exports = BookModel;