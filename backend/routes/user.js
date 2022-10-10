const express=require('express')
const {addUser , getAllUser,deleteUser,updateUser,getUser}=require('../controllers/userController')
const router=express.Router()

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