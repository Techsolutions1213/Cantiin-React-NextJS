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
import IconButton from '@mui/material/IconButton';

import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


import { amber, blue, blueGrey, brown, common, cyan, deepOrange, 
	deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, 
	purple, red, teal, yellow } from '@mui/material/colors';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';







/*
const theme1 = createTheme({
	palette:{
		primary:lightBlue
	}
  });



const theme2 = createTheme({
	status: {
	  danger: '#e53e3e',
	},
	palette: {
	  primary: {
		main: '#0971f1',
		darker: '#053e85',
	  },
	  neutral: {
		main: '#64748B',
		contrastText: '#fff',
	  },
	},
  });



  const darkTheme = createTheme({
	palette: {
	  mode: 'dark',
	  primary:lightBlue

	},
  });
*/




const ColorModeContext = React.createContext({ toggleColorMode: () => {} });






const App = ()=>{




	const [mode, setMode] = React.useState('light');
	const colorMode = React.useMemo(
	  () => ({
		toggleColorMode: () => {
		  setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
		},
	  }),
	  [],
	);
  
	const theme = React.useMemo(
	  () =>
		createTheme({
		  palette: {
			mode,
		  },
		}),
	  [mode],
	);


	const toogler = (<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
	{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>);






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
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<TitleContextProvider>
						<Drawer DrawerContent={DrawerContent} toogler={toogler}/>
					</TitleContextProvider>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</AuthContextProvider>
	);
};


export default App;
