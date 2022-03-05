import React, { useContext, useEffect } from 'react';
import { styled, Theme, CSSObject, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext, useTheme } from '@emotion/react';

import { useRouter } from 'next/router';

import Link from 'next/link';





/*Contexts*/
import AccountContextProvider, {AccountContext} from '../contexts/AccountContext';

/*Types*/
import type { pageComponent } from '../types';



/*Colors*/
import { orange } from '@mui/material/colors';

/*Icons*/
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, Stack } from '@mui/material';





/*Icons */
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';
import AddBoxIcon from '@mui/icons-material/AddBox';






const drawerWidth = 240;
  
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);





export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



const CustomDrawer=({ children })=>{
    
    let pageHeader:string = children.type.header; 
    //const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };



    const router = useRouter()

    let {loggedIn, logIn, logOut, refreshAccountContext} = useContext(AccountContext);



    useEffect(()=>{
        refreshAccountContext();
    },[]);
    //Only Executed first time the layout is rendered



    useEffect(()=>{},[loggedIn]);
    //Every time the loggedIn var updates, the whole layout will render




    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
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
          typography:{button:{textTransform:"none", fontWeight:"bold"}}
        }),
      [mode],
    );


    let LogUserOut:()=>void = ()=>{
        fetch("https://cantiin.com/api/auth/custom/logout/",{
            method: 'GET',
            mode: 'cors', 
            cache: 'no-cache',
            credentials:"include",
          }).
          then((response)=>{
              if(response.status===200){logOut();}
          }).catch()
    }


    


    //Login, Logiut, Sign Up buttons
    let AccountButtons:JSX.Element = loggedIn?
    <Button color='error' variant='contained' onClick={LogUserOut}>Logout</Button>
    :
    <>
        <Link href="/login">
          <Button color='info' variant='contained'>Login</Button>
        </Link>
        <Link href="/signup">
          <Button color='success' variant='contained'>Sign Up</Button>
        </Link>
    </>
    ;



    let AccountSideBar:JSX.Element = loggedIn?
    <></>
    :
    <>
      <Divider />
        <ListItem button onClick={()=>{router.push("/login")}}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
        </ListItem>
        
        <ListItem button onClick={()=>{router.push("/signup")}}>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
        </ListItem>
    </>
    ;




    return(
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open} >
      <Toolbar sx={{display:"flex", flexDirection:"row"}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{flexGrow:1}}>
          Cantiin React - {pageHeader}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{display:"inline"}}>
          <IconButton sx={{ ml: 1, alignSelf:"right" }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
            {AccountButtons}
        </Stack>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        

      <ListItem button onClick={()=>{router.push("/")}}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        
        <ListItem button onClick={()=>{router.push("/about")}}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>

        <Divider />
        <ListItem button onClick={()=>{router.push("/products")}}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
        </ListItem>

        

        {AccountSideBar}




      </List>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {children}
    </Box>
  </Box>
  </ThemeProvider>
  </ColorModeContext.Provider>
    );
}

export default CustomDrawer;

