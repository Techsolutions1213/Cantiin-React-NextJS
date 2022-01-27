import React,  {useState, useContext} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AuthContext from "../../Contexts/Authentication";
import fetchers from "../../Functions/fetchers";



function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
        Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function SignIn() {
	const {successfulUserResponse} = useContext(AuthContext);


	const [errMessage,setErrorMessage] = useState("");
	const [formErrors,setFormErrors] = useState({"username":"", "password":""});

	const handleSubmit = (event) =>{
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const username=  formData.get("username");
		const password= formData.get("password");
		setErrorMessage("");
		setFormErrors({"username":"", "password":""});
		

		fetchers.auth.login({username, password})
			.then(function (response) {
				successfulUserResponse(response);
				window.location.replace("/");
			})
			.catch(function (error) {
				console.log();
				//setErrorMessage("Wrong Username or Password");
		
				let data = error.response.data;
				console.log(data);
				setFormErrors({...formErrors, ...data});
			})
			.catch(()=>{
				console.log("second error");
				setErrorMessage("Something went wrong");
			});

	};


	const handleChange=(e)=>{
		setFormErrors(
			{
					...formErrors,
					[e.target.name]:""
			}
		);
	};














	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
					>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
            		Sign in
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoFocus
							error={formErrors.username?true:false}
							helperText={formErrors.username||undefined}
							onChange={handleChange}

						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							error={formErrors.password?true:false}
							helperText={formErrors.password||undefined}
							onChange={handleChange}
						/>
						<Typography sx={{
							display:"flex",
							justifyContent:"center",
							color: "error.main" 
						}}>
							{errMessage}
						</Typography>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
              			Sign In
						</Button>
						<Container  sx={{
							display:"flex",
							justifyContent:"center",
						}}>
								<Link href="/signup/" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
						</Container>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}