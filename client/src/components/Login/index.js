import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PasswordField from 'material-ui-password-field'
import FormHelperText from '@material-ui/core/FormHelperText'

const Login = () => {
	const [data, setData] = useState({ Email: "", Password: "" });
	const [error, setError] = useState("");

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value  });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>

						<FormControl >
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
   
	name="Password"
	onChange={handleChange}
  />
  <FormHelperText>Enter your secret password</FormHelperText>
  </FormControl>

						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;