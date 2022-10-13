import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import UserCard from '../components/UserCard'
import { getAllUsers, toggleShow } from '../redux/actions/userAction'
import Alert from '@mui/material/Alert';

function Users() {
  const users=useSelector(state=>state.userReducer.users)
  const showAlert=useSelector(state=>state.userReducer.showAlert)
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getAllUsers())
  },[])
  return (
    <>
    <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"90%",margin:"50px auto",gap:"30px"}}>

     {
      users.map(user=>
        <UserCard user={user} key={user._id} />
        )
     }
      
    </Box>
    {showAlert &&<Alert severity='success' showAlert={showAlert} onClose={() => dispatch(toggleShow())} > User Created Succefully </Alert> }
    </>
  )
}

export default Users
