const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    first_name:{type:String,default:'guest'},
    last_name:{type:String,default:'guest'},
    email:{type:String ,unique:true},
    password:{type:String},
    token:{type:String},





});
module.exports=mongoose.model("user",userSchema);