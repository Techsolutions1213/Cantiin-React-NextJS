import * as React from "react";
import { Routes, Route,      Link } from "react-router-dom";
import Drawer from "./Custom/Drawer";



/*Contexts*/
import { AuthContextProvider } from "./Contexts/Authentication";


/* Routes */
import Home from "./Routes/Home";
import About from "./Routes/About";
import Login from "./Routes/Login";
import SignUp from "./Routes/Signup";
import CreateProduct from "./Routes/Products/CreateProduct";
import ProductsList from "./Routes/Products/ProductsList";
import TestRoute from "./Routes/Test";

const App = ()=>{
	const DrawerContent = (        
		<Routes>
			<Route path="/" element={<ProductsList />} />
			<Route path="/about/" element={<About />} />
			<Route path="/login/" element={<Login />} />
			<Route path="/signup/" element={<SignUp />} />
			<Route path="/products/create/" element={<CreateProduct />} />
			<Route path="/products/" element={<ProductsList />} />
			<Route path="/test/" element={<TestRoute />} />
		</Routes>
		
	);

	return (
		<AuthContextProvider>
			<Drawer DrawerContent={DrawerContent} />
		</AuthContextProvider>
	);
};


export default App;
