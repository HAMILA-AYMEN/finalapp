const express=require('express')
const {addUser , getAllUser,deleteUser,updateUser,getUser}=require('../controllers/userController')
const { userLogin, validate } = require("../models/UserLogin");
const router=express.Router()
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
        
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await userLogin.findOne({ Email: req.body.Email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.Password, salt);
        
		await new userLogin({ ...req.body, Password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// Add user
router.post('/adduser',addUser)
// get all users
router.get('/allusers',getAllUser)
//get One user
router.get('/user/:id',getUser)
//delete User
router.delete('/deleteuser/:id',deleteUser)
//Update User
router.put('/updateuser/:id',updateUser)


module.exports=router