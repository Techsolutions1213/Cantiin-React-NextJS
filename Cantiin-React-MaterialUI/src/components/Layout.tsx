import React from "react";
import Drawer from './Drawer';

/*Contexts*/
import AccountContextProvider from '../contexts/AccountContext';


  export default function Layout ({ children }) : JSX.Element {
    return (
      <AccountContextProvider>
            <Drawer>{children}</Drawer>
      </AccountContextProvider>
    );
  }
  