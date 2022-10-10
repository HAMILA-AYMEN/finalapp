const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const Joi = require("joi");

const passwordComplexity = require("joi-password-complexity");
const userLoginSchema=new mongoose.Schema({
    Lastname:{
        type:String ,required:true
    },

    Firstname:{
        type:String ,required:true
    },
    Email:{
        type:String,required:true
    },
    Password:{
        type:String,required:true
    }

   

})
userLoginSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;

}
const userLogin=mongoose.model("UserLogin",userLoginSchema)

const validate = (data) => {
	const schema = Joi.object({
		Firstname: Joi.string().required().label("First Name"),
		Lastname: Joi.string().required().label("Last Name"),
		Email: Joi.string().email().required().label("Email"),
		Password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};
module.exports = { userLogin, validate };