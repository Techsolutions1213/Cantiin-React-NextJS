import React, { Component, Fragment } from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSearchParams } from "react-router-dom";


import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
	getUrlPage} from "../Functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
	getApiResponsePage,getMaxPage} from "../Functions/fetching/list";

import {getCurrentPagePaginationButton,getPrevPagePaginationButton,
	getFirstPagePaginationButton,getNextPagePaginationButton,
	getLastPagePaginationButton, getPrevPagesPaginationButtons, getNextPagesPaginationButtons} from "../Functions/pagination";








const PaginationContent = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();

	const currentPage = parseInt(searchParams.get("page")) || 1;
	let response = props.response;
	let maxPageNumber = getMaxPage(response);
    
	return (
		<>
		<Stack spacing={2}>
		<Pagination count={maxPageNumber} page={currentPage} showFirstButton showLastButton />
	  </Stack> 
		</>
	);
};
 



export default PaginationContent;



