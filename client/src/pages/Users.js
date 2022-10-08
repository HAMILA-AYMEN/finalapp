import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import UserCard from '../components/UserCard'
import { getAllUsers } from '../redux/actions/userAction'

function Users() {
  const users=useSelector(state=>state.userReducer.users)
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getAllUsers())
  },[])
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"90%",margin:"50px auto",gap:"30px"}}>

     {
      users.map(user=>
        <UserCard user={user} key={user._id} />
        )
     }
    </Box>
  )
}

export default Users
