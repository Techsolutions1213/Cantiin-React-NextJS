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
			<TitleContextProvider>
				<Drawer DrawerContent={DrawerContent} />
			</TitleContextProvider>
		</AuthContextProvider>
	);
};


export default App;
