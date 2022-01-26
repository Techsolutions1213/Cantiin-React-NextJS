import { getUrlPage } from "../Functions/urls";
import React, { Component } from "react";

import { Routes, Route,      Link, useNavigate, useSearchParams } from "react-router-dom";

import {getUrlPath} from "../Functions/urls";

//var assert = require("assert");

/* it takes these inputs
1. type (string):
It must have one of these values
["first","prev","number","next","last","dots"]


2. link (str)  (default = "")
- If link is passed, then there is a link, else, it is disabled
- if type is number and not active, then a link must be passed

3. active (bool) (default=false)
- if number, it could be active
- if active it will be auto disabled

*/






const PaginationButton = (props) => {
	let navigate = useNavigate();
	let {type, link = null, active = false} = props;
	if(link){var pageNumber = getUrlPage(link);}
	//console.log(`props is:`);
	//console.log(this.props);


	if(!type){throw("PaginationButton: type is required");}



	if(!(["first","prev","number","next","last","dots"].includes(type)))
	{throw("PaginationButton: type must be one of these values: [\"first\",\"prev\",\"number\",\"next\",\"last\",\"dots\"]");}
    
	if(type=="number")
	{
		if(link==null)
		{throw("PaginationButton: type is number, so a link must be passed");}
	}


    
	if(active){return <li className="paginationListIndex">
		<button className="PaginationButton PaginationButton-disabled PaginationButton-active" disabled>{pageNumber}</button></li>;}

	let buttonText="";

	if      (type=="first"){buttonText="<<";}
	else if (type=="prev"){buttonText="<";}
	else if (type=="number"){buttonText=pageNumber;}
	else if (type=="next"){buttonText=">";}
	else if (type=="last"){buttonText=">>";}
	else {return <li className="paginationListIndex">
		<button
			className="PaginationButton PaginationButton-disabled"
			disabled>...</button></li>;} //type = dots



	if(!link){
		return <li className="paginationListIndex">
			<button 
				className="PaginationButton PaginationButton-disabled"
				disabled>{buttonText}</button>
		</li>;
	}
	else{
		return (<li className="paginationListIndex">
            
			<button className="PaginationButton" onClick={()=>{navigate(`/products?page=${pageNumber}`
				, { replace: true });}}>{buttonText}</button>
		</li>);
	}

};
/*
<Link className="paginationLink" to={getUrlPath(link)}>

</Link>


*/


export default PaginationButton;




