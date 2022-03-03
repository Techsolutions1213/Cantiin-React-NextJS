import {createContext, useState} from 'react';
import type { Context } from 'react';

export interface AccountType {
    loggedIn: boolean, 
    logOut:()=>void, logIn:()=>void, refreshAccountContext:()=>void
};


export const AccountContext:Context<AccountType> = 
createContext({loggedIn:true, logOut:()=>{}, logIn:()=>{}, refreshAccountContext:()=>{}});


const AccountContextProvider:(any)=>JSX.Element = (props):JSX.Element=>{
    let [state, setState] = useState({loggedIn:false});

    const logOut:()=>void = ()=>{setState({loggedIn:false})};
    const logIn:()=>void = ()=>{setState({loggedIn:true})};
    const refreshAccountContext:()=>void = ()=>{
        fetch("https://cantiin.com/api/auth/custom/user/",{
        method: 'GET',
        mode: 'cors', 
        cache: 'no-cache',
        credentials:"include",
      }).
      then((response:any)=>{
        if(response.status===200){setState({...state, loggedIn:true});}
        else{setState({...state, loggedIn:false});}
      }).catch(()=>{})
    }

    return ( 
        <AccountContext.Provider value={
            {...state, logOut, logIn, refreshAccountContext}}>
            {props.children}
        </AccountContext.Provider> 
        );
}
 
export default AccountContextProvider;