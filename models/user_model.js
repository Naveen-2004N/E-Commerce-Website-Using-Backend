const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:3,
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[],
    },
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
},{timestamps:true})
const userModel = mongoose.model("user",userSchema)
module.exports = userModel