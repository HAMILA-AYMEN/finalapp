const User=require('../models/User')

exports.addUser=async(req,res)=>{
    const {Lastname,Firstname,Email,Phone}=req.body

    try {
        const checkUser=await User.findOne({Email})
        if (checkUser){
            return res.send("<h1>user is already exists</h1>")
        }
        const user=new User({
            Lastname,Firstname,Email,Phone
        })
        await user.save()
        res.status(201).send({msg:"user created",user})
    } catch (error) {
        res.status(500).send("server error")
    }
}

exports.getAllUser=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send("server error")
    }
}


exports.deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        await User.findByIdAndDelete(id)
        res.send("user deleted")
    } catch (error) {
        res.status(500).send("server error") 
    }
}

exports.updateUser=async(req,res)=>{
    const {id}=req.params
    try {
      const updateuser=  await User.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
        res.send(updateuser)
    } catch (error) {
        res.status(500).send("server error") 
    }
}

exports.getUser=async(req,res)=>{
    const {id}=req.params
    try {
       const user= await User.findById(id)
        res.send(user)
    } catch (error) {
        res.status(500).send("server error") 
    }
}