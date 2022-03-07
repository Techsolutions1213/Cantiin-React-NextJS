import React, {useState, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useRouter } from 'next/router';



/*Contexts */

import { AccountContext } from '../contexts/AccountContext';


/* Types */
import type { creatingPageComponent } from '../types';
import { ThemeContext } from '@emotion/react';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Cantiin-React
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}








const validationSchema = yup.object({
    username: yup
      .string()
      .required('Username or Email is required'),
    password: yup
      .string()
      .min(3, 'Password should be of minimum 3 characters length')
      .required('Password is required'),
    re_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
    });



export default function SignupPage(): creatingPageComponent {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [somethingWentWrong, setSomethingWentWrong] = useState(false);
  let {logIn} = useContext(AccountContext);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      re_password:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setSomethingWentWrong(false);
      fetch("https://cantiin.com/api/auth/custom/signup/",{
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).
      then((response:{status:number, [index:string]:any})=>{
        if(response.status===200){
          logIn();
          router.push("/");
        }
        else{
          console.log("response", response);
          //console.log(response.body);

          formik.setErrors({...formik.errors, password:"Wrong Username or Password"});
        }
      }).
      catch((err)=>{
        setSomethingWentWrong(true);
      }).
      finally(()=>{try {setLoading(false);} catch (error){}});
    },
  });



  const handleChange:((e:any)=>void) = (e:any) => {
    setSomethingWentWrong(false);
    formik.handleChange(e);
  }




  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" 
          onSubmit={formik.handleSubmit} 
          noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username or Email"
              name="username"
              autoFocus
              value={formik.values.username}
              onChange={handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
     
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}    
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="re_password"
              label="Confirm Password"
              type="password"
              id="re_password"
              value={formik.values.re_password}
              onChange={handleChange}
              error={formik.touched.re_password && Boolean(formik.errors.re_password)}
              helperText={formik.touched.re_password && formik.errors.re_password}    
            />




            {somethingWentWrong?<Typography textAlign={"center"} color={"red"}>
              Something went wrong, maybe you are not connected to the internet
            </Typography>:<></>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}




SignupPage.header="Sign Up";




