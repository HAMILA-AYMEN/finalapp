const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    Lastname:{
        type:String ,required:true
    },

    Firstname:{
        type:String ,required:true
    },
    Email:{
        type:String,required:true
    },

    Phone:Number

})
module.exports=mongoose.model("User",userSchema)