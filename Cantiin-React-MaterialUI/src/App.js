import * as React from "react";
import { Routes, Route,      Link } from "react-router-dom";
import Drawer from "./Custom/Drawer";



/*Contexts*/
import { AuthContextProvider } from "./Contexts/Authentication";
import TitleContextProvider from "./Contexts/Title";

/* Routes */
import Home from "./Routes/Home";
import About from "./Routes/About";
import LoginRoute from "./Routes/Auth/Login";
import SignUp from "./Routes/Auth/Signup";
import CreateProduct from "./Routes/Products/CreateProduct";
import ProductsList from "./Routes/Products/ProductsList";
import TestRoute from "./Routes/Test";

import { createTheme, ThemeProvider } from '@mui/material/styles';


import { amber, blue, blueGrey, brown, common, cyan, deepOrange, 
	deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, 
	purple, red, teal, yellow } from '@mui/material/colors';




console.log(blue);



const theme = createTheme({
	palette:{
		primary:lightBlue
	}
  });



console.log(theme);



const App = ()=>{
	const DrawerContent = (        
		<Routes>
			<Route path="/" element={<ProductsList />} />
			<Route path="/about/" element={<About />} />
			<Route path="/login/" element={<LoginRoute />} />
			<Route path="/signup/" element={<SignUp />} />
			<Route path="/products/create/" element={<CreateProduct />} />
			<Route path="/products/" element={<ProductsList />} />
			<Route path="/test/" element={<TestRoute />} />
		</Routes>
		
	);

	return (
		<AuthContextProvider>
			<ThemeProvider theme={theme}>
				<TitleContextProvider>
					<Drawer DrawerContent={DrawerContent} />
				</TitleContextProvider>
			</ThemeProvider>
		</AuthContextProvider>
	);
};


export default App;
