import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux'
import {deleteUser, getOneUser} from '../redux/actions/userAction'
import { useNavigate } from 'react-router-dom';


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
        <Button size="small" variant="contained" onClick={handleDelete}>Delete</Button>
        <Button size="small"  variant="contained" onClick={handleEdit} >Edit</Button>
      </CardActions>
    </Card>
  );
}