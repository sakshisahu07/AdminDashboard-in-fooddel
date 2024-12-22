

const mongoose=require("mongoose")
const adminSchema=new mongoose.Schema({
    user:String,
    password:Number
})
module.exports=mongoose.model("adminuser",adminSchema)