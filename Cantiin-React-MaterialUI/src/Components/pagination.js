import React, { Component, Fragment } from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
	getUrlPage} from "../Functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
	getApiResponsePage,getMaxPage} from "../Functions/fetching/list";

import {getCurrentPagePaginationButton,getPrevPagePaginationButton,
	getFirstPagePaginationButton,getNextPagePaginationButton,
	getLastPagePaginationButton, getPrevPagesPaginationButtons, getNextPagesPaginationButtons} from "../Functions/pagination";








const PaginationContent = (props) => {
    
	let response = props.response;
	let currentUrl = window.location.href;
	let maxPageNumber = getMaxPage(response);
    
	return (
		<>
		<Stack spacing={2}>
		<Pagination count={maxPageNumber} showFirstButton showLastButton />
	  </Stack> 
		</>
	);
};
 



export default PaginationContent;



