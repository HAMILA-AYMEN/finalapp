import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addUser, toggleShow} from '../redux/actions/userAction'


function AddUser() {
    const [user,setUser]=useState({Lastname:"",Firstname:"",Email:"",Phone:""})
    const dispatch=useDispatch()
    const navigate=useNavigate()
const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}

const handleAdd=(e)=>{
e.preventDefault()
dispatch(addUser(user))
dispatch(toggleShow())
navigate('/users')
}
const [showAlert, setShowAlert] = useState(false);
  return (
    <form  onSubmit={handleAdd}>
    <Box sx={{display:"flex",flexDirection:"column",gap:"20px",margin:"50px auto",width:"50%"}}>
      <TextField id="outlined-basic" label="Lastname" variant="outlined" fullWidth name="Lastname" onChange={handleChange} />
      
      <TextField id="outlined-basic" label="Firstname" variant="outlined" fullWidth name="Firstname" onChange={handleChange}/>
      
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth name="Email" onChange={handleChange}/>
      <TextField id="outlined-basic" label="Phone" vshowAlertariant="outlined" fullWidth name="Phone" onChange={handleChange}/>
      <Button variant='contained' type="submit" fullWidth onClick={() => setShowAlert(true)}>Submit</Button>
     
    </Box>
    </form>
  )
}

export default AddUser
