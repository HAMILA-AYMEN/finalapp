import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useDispatch} from 'react-redux'
import {deleteUser, getOneUser} from '../redux/actions/userAction'
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function UserCard({user}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleDelete=()=>{
    dispatch(deleteUser(user._id))
  }
  const handleEdit=()=>{
    dispatch(getOneUser(user._id))
    navigate('/edit')
  }

  const [open,setOpen]=useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpZ3u4WhVNe9S_b8W4Qxuh_gcgd_TmFcKJw&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.Lastname}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {user.Firstname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {user.Email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {user.Phone}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={handleOpen}>Delete</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    Are you sure you want to delete this entity?
    </Typography>
    <Button size="small"  variant="contained" onClick={handleDelete} >Yes</Button>
  </Box>
</Modal>
        <Button size="small"  variant="contained" onClick={handleEdit} >Edit</Button>
      </CardActions>
    </Card>
  );
}