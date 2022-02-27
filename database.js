const mongoose =require("mongoose");
const {MONGO_URI}=process.env;

//connect to db

exports.connect=() => {

mongoose.connect(MONGO_URI,{useNewUrlParser:true})
.then(() => {console.log("connected ....");})
.catch((error)=>{console.log("not connected"+error)});

};

