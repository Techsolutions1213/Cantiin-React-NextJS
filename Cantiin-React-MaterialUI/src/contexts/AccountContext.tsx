import {createContext, useState} from 'react';
import type { Context } from 'react';

export interface AccountType {
    loggedIn: boolean, 
    logOut:()=>void, logIn:()=>void
};


export const AccountContext:Context<AccountType> = 
createContext({loggedIn:true, logOut:()=>{}, logIn:()=>{}});


const AccountContextProvider:(any)=>JSX.Element = (props):JSX.Element=>{
    let [state, setState] = useState({loggedIn:false});

    const logOut:()=>void = ()=>{setState({loggedIn:false})};
    const logIn:()=>void = ()=>{setState({loggedIn:true})};

    return ( 
        <AccountContext.Provider value={
            {...state, logOut, logIn}}>
            {props.children}
        </AccountContext.Provider> 
        );
}
 
export default AccountContextProvider;