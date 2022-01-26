import React, {useState, useContext} from "react";
import fetchers from "../../../Functions/fetchers";
import {Redirect} from "react-router-dom";

import AuthContext from "../../../contexts/Authentication";


const axios = require("axios");








const SignupForm = () => {
  
  

	const [form,setForm] = useState(
		{
			data:   {username:"", password:"", re_password:""},
			errors: {username:"", password:"", re_password:""},
			errMsg:""
		});
    
	const {successfulUserResponse} = useContext(AuthContext);


	const handleSubmit = (e) =>{
		e.preventDefault();
    
		setForm(
			{
				...form,
				errors: {username:"",password:"", re_password:""}
			}
		);

		if (form.data.password !== form.data.re_password)
		{
			setForm(
				{
					...form,
					errors: {username:"",password:"", re_password:"password mismatch"}
				}
			);
			return;
		}


		fetchers.auth.signup(
			{"username":form.data.username,"password":form.data.password})
			.then(function (response) {
				successfulUserResponse(response);
				window.location.replace("/login");
			})
			.catch(function (error) {
				//console.log(error);
				let data = error.response.data;
				setForm({
					...form,
					errors:{
						...form.errors,
						...data
					}
				});
			})
			.catch(()=>{
				setForm(
					{
						...form,
						errMsg:"Something went wrong"
					});
			});
    
	};



	const handleChange=(e)=>{
		setForm(
			{
				data:{
					...form.data,
					[e.target.name]:e.target.value
				},
				errors:{
					...form.errors,
					[e.target.name]:""
				}
			}
		);
	};



	return ( <form onSubmit={handleSubmit}>

		<div>
			<label>Username: </label>
			<input type="text" name="username" value={form.data.username} onChange={handleChange}/>
			<span className="form-error" name="username"> {form.errors.username}</span>
		</div>
    
		<div>
			<label>Password: </label>
			<input type="password" name="password" value={form.data.password} onChange={handleChange}/>
			<span className="form-error" name="password"> {form.errors.password}</span>
		</div>


		<div>
			<label>Retype Password: </label>
			<input type="password" name="re_password" value={form.data.re_password} onChange={handleChange}/>
			<span className="form-error" name="re_password"> {form.errors.re_password}</span>
		</div>
    
    
		<input type="submit" value="Create Account"/>


		<div className="message-of-error-page">{form.errMsg}</div>



	</form> );
};
 
export default SignupForm;
