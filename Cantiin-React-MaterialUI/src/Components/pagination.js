import React, { Component, Fragment } from "react";

import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
	getUrlPage} from "../Functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
	getApiResponsePage,getMaxPage} from "../Functions/fetching/list";

import {getCurrentPagePaginationButton,getPrevPagePaginationButton,
	getFirstPagePaginationButton,getNextPagePaginationButton,
	getLastPagePaginationButton, getPrevPagesPaginationButtons, getNextPagesPaginationButtons} from "../Functions/pagination";








const Pagination = (props) => {
    
	let response = props.response;
	let currentUrl = window.location.href;
	let maxPageNumber = getMaxPage(response);
    
	return (
		<ul className="pagination"> 
			{getFirstPagePaginationButton(currentUrl)}
			{getPrevPagePaginationButton(currentUrl)}
			{getPrevPagesPaginationButtons(currentUrl)}
            
			{getCurrentPagePaginationButton(currentUrl)}
            
			{getNextPagesPaginationButtons(
				currentUrl, maxPageNumber)}
			{getNextPagePaginationButton(
				currentUrl, maxPageNumber)}
			{getLastPagePaginationButton(
				currentUrl, maxPageNumber)}
        
		</ul>  
	);
};
 



export default Pagination;



