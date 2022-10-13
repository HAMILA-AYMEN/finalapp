import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {styled} from '@mui/material'
import PasswordField from 'material-ui-password-field'
import FormHelperText from '@material-ui/core/FormHelperText'


const Signup = () => {
	const [data, setData] = useState({
		Firstname: "",
		Lastname: "",
		Email: "",
		
		Password: "",
		PasswordAgain:""
		
	});
	const [error, setError] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	
	const navigate = useNavigate();

	const handleChange =(event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	  };
	  

	  
	

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (data.PasswordAgain!== data.Password) {
		alert('password not match')
		  } else {
		
			
		try {
			const url = "/api/user";
			const { data: res } = await axios.post(url, {Firstname:data.Firstname,Lastname:data.Lastname,Email:data.Email,Password:data.Password});
			navigate("/login");
			console.log(res.message);
			setShowAlert(res.message)
			
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
		  }
	};

	const Faldoun=styled(TextField)({
		marginLeft: "20px",
		paddingBottom:"0%"
	})

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						
						
						<Box  component="form" >
      <FormControl sx={{marginLeft: "20px",paddingBottom:"0%"}} >
	
	  <TextField 
	  id="standard-basic" 
	  label="First Name" 
	  variant="standard"
	  name="Firstname"
	  onChange={handleChange}
	   />

	  <TextField 
	  id="standard-basic" 
	  label="Last Name" 
	  variant="standard" 
	  name="Lastname"
	  onChange={handleChange}
	  />

	  <TextField 
	  id="standard-basic"
	   label="Email"
	    variant="standard" 
		name="Email"
	  onChange={handleChange}
		
		/>
		
     
   
        
        
        
  <InputLabel htmlFor='name-label'></InputLabel>
  <PasswordField fullWidth sx={{ m: 1 }}
    id='name-label'
	hintText="At least 8 characters"
	name="Password"
	onChange={handleChange}
	errorText="Your password is too short"
  />
  <FormHelperText>Enter your secret password</FormHelperText>

  <InputLabel htmlFor='name-label'></InputLabel>
  <PasswordField fullWidth sx={{ m: 1 }}
    id='name-label'
	hintText="At least 8 characters"
	name="PasswordAgain"
	onChange={handleChange}
	errorText="Your password is too short"
  />
  <FormHelperText>Enter Again your secret password</FormHelperText>
</FormControl>
        
        
     
    </Box>
						
						
			
	{error && <div className={styles.error_msg}>{error}</div>}
	
	
						<button onClick={() => setShowAlert(true)} type="submit" className={styles.green_btn}>
							Sing Up
							
						</button>
						
						{showAlert &&<Alert severity='success' showAlert={showAlert} onClose={() => setShowAlert(false)} > User Created Succefully </Alert> }
					</form>
					
				</div>
			</div>
		</div>
	);
};

export default Signup;