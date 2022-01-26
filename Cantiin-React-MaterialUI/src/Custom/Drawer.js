import React, {useContext} from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import DrawerList from "../Components/DrawerList";
import Button from "@mui/material/Button";
import AuthContext from "../Contexts/Authentication";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}),
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function DrawerCustom({DrawerContent, DrawerHeaderCustom}) {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	let navigate = useNavigate();



	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};


	//const authContext = useContext(AuthContext);
	const authContext = useContext(AuthContext);


	const accountSection = authContext.is_authenticated?(
		<Button color="inherit" onClick={()=>{navigate("/login/");}}>Logout</Button>
	):(					
		<>
			<Button color="inherit" onClick={()=>{navigate("/login/");}}>Login</Button>
			<Button color="inherit" onClick={()=>{navigate("/signup/");}}>Signup</Button>
		</>
	);

	console.log(authContext.is_authenticated);
	//console.log(authState, Logout);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Canttin - Home
					</Typography>
					{accountSection}

				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />

				<DrawerList listItems={          [
					{"linkText": "Home", icon:<InboxIcon />,link:"/"},
					{"linkText": "About", icon:<InboxIcon />,link:"/about"},  
				]}/>


				<Divider />
				<DrawerList listItems={          [
					{"linkText": "Products List", icon:<InboxIcon />,link:"/products"},
					{"linkText": "Create Product", icon:<InboxIcon />,link:"/products/create"},  
				]}/>
				<Divider />

				<DrawerList listItems={          [
					{"linkText": "Login", icon:<InboxIcon />,link:"/login"}, 
					{"linkText": "Sign Up", icon:<InboxIcon />,link:"/signup"},
 
				]}/>


			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				{DrawerContent}
			</Main>
		</Box>
	);
}


