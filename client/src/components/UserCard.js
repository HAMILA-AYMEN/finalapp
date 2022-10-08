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
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://slp-statics.astockcdn.net/static_assets/staging/22spring/homepage/featured-contributors/card-5.jpg?width=580&format=webp"
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
        <Button size="small"  variant="contained" onClick={()=>{
          dispatch(getOneUser(user._id));
          navigate('/edit')
        }} >Edit</Button>
      </CardActions>
    </Card>
  );
}