import {createContext, useState, useEffect} from "react";
import fetchers from "../Functions/fetchers";

const AuthContext = createContext();

export default AuthContext;

const AuthContextProvider = (props) => {
	//console.log(localStorage.getItem("authState"))
	let defaultAuthState= 
        (localStorage.getItem("authState")!==null) 
        	? JSON.parse(localStorage.getItem("authState")) 
        	: { "is_authenticated":false, "user":null} ;

	const [authState, setAuthState] = useState( defaultAuthState );


    
	const successfulUserResponse = (response) =>{
		let correctAuthState = {"is_authenticated":true,"user":response.data};
		localStorage.setItem("authState",JSON.stringify(correctAuthState));
		setAuthState(correctAuthState);       
	};


	const failureUserResponse = () =>{
		let correctAuthState = {"is_authenticated":false, "user":null};
		localStorage.setItem("authState",JSON.stringify(correctAuthState));
		setAuthState(correctAuthState);      
	};

    
	const refetchIsAuthenticated = () =>{
		fetchers.auth.who()
			.then((response)=>{successfulUserResponse(response);})
			.catch((err)=>{failureUserResponse();});
	};

	const LogOut = (e) =>{
		//console.log("Let's Logout");
		fetchers.auth.logout()
			.then((response)=>{refetchIsAuthenticated();})
			.catch((err)=>{refetchIsAuthenticated();});
	};


    
	useEffect(()=>{refetchIsAuthenticated();},[localStorage.getItem("authState")]);

	return ( 
		<AuthContext.Provider 
			value={{...authState, refetchIsAuthenticated, successfulUserResponse, failureUserResponse, LogOut}}>
			{props.children}
		</AuthContext.Provider> );
};
 
export {AuthContextProvider};