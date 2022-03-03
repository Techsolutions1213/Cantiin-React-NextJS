import {createContext, Component, useState} from 'react';
import type { Context } from 'react';
import type Items

export interface AccountType {
    loggedIn: boolean, 
    logOut:()=>void, logIn:()=>void
};



export const AccountContext:Context<AccountType> = createContext({loggedIn:true});



const AccountContextProvider:(any)=>JSX.Element = (props):JSX.Element=>{
    let [state, setState] =  useState({loggedIn:false});

    const logOut:()=>void = ()=>{setState({loggedIn:false})};
    const logIn:()=>void = ()=>{setState({loggedIn:true})};


    return ( 
        <AccountContext.Provider value={
            {...state, 
            //toggleTheme:toggleTheme
            
            }}>
            {props.children}
        </AccountContext.Provider> 
        );
}


class AccountContextProviderr extends Component {
    state = { 
        isLightTheme:true,
        light:{syntax: "#555", ui: "#ddd", bg:"#eee"},
        dark:{syntax: "#ddd", ui: "#333", bg:"#555"},
    };

    toggleTheme=()=>{
        this.setState({isLightTheme:!this.state.isLightTheme});
    }

    render() { 
        return ( 
        <AccountContext.Provider value={
            {...this.state, toggleTheme:this.toggleTheme}}>
            {this.props.children}
        </AccountContext.Provider> );
    }
}
 
export default AccountContextProvider;