import { Box, Button, TextField } from '@mui/material'
import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser} from '../redux/actions/userAction'

function EditUser() {
    const [user,setUser]=useState({Lastname:"",Firstname:"",Email:"",Phone:""})
    const dispatch=useDispatch()
    const navigate=useNavigate()
const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}
const userStore=useSelector(state=>state.userReducer.user)

useEffect(()=>{
    setUser({Lastname:userStore?.Lastname,Fisrtname:userStore?.Firstname,Email:userStore?.Email,Phone:userStore?.Phone})
},[userStore])

const handleEdit=()=>{
    dispatch(updateUser(userStore._id,user))
    navigate('/users')
}

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"20px",margin:"50px auto",width:"50%"}}>
      <TextField id="outlined-basic" label="Lastname" variant="outlined" fullWidth name="Lastname" value={user.Lastname} onChange={handleChange} />
      
      <TextField id="outlined-basic" label="Firstname" variant="outlined" fullWidth name="Firstname" value={user.Firstname} onChange={handleChange}/>

      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth name="Email" value={user.Email} onChange={handleChange}/>
      
      <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth name="Phone" value={user.Phone} onChange={handleChange}/>
      <Button variant='contained' fullWidth onClick={handleEdit} >Submit</Button>
    </Box>
  )
}

export default EditUser
