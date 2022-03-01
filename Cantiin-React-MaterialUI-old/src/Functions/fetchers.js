/*
They are all functions
*/


import { settings } from "../settings";
const axios = require("axios");


function productsListFetcher(pageNumber = 1)
{
	var config = {
		method: "get",
		url: settings.backend_urls.products.list(pageNumber),
	};
	let fetcher = axios(config);
	return fetcher;
}





function authLoginFetcher({username,password}){
	let fetcher=axios(
		{
			method: "post",
			url: settings.backend_urls.auth.login,
			withCredentials: true,
			data:{username,password}
		}
	);
	return fetcher;   
}





function authٍSignupFetcher({username,password}){
	let fetcher=axios(
		{
			method: "post",
			url: settings.backend_urls.auth.signup,
			withCredentials: true,
			data:{username,password}
		}
	);
	return fetcher;   
}



function authLogoutFetcher(){
	let fetcher=axios(
		{
			method: "post",
			url: settings.backend_urls.auth.logout,
			withCredentials: true,
		}
	);
	return fetcher;   
}





function authWhoFetcher(){
	let fetcher=axios(
		{
			method: "get",
			url: settings.backend_urls.auth.user,
			withCredentials: true,
		}
	);
	return fetcher;
}







const fetchers={
	products:
    {
    	list: productsListFetcher,
    	get: "get",
    	post: "post",
    	delete: "delete",
    	edit: "edit"
    },
	auth:
    {
    	signup:authٍSignupFetcher,
    	login: authLoginFetcher,
    	logout: authLogoutFetcher,
    	who: authWhoFetcher,
    }
};

export default fetchers;