import React from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSearchParams } from "react-router-dom";
import {getMaxPage} from "../Functions/fetching/list";
import { color } from "@mui/system";

const PaginationContent = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();
	const currentPage = parseInt(searchParams.get("page")) || 1;
	let response = props.response;
	let maxPageNumber = getMaxPage(response);
	const handleChange = (event, newPage) => {
		setSearchParams({page:newPage});
	  };
	return (
		<>
		<Stack spacing={2}>
		<Pagination count={maxPageNumber} page={currentPage} onChange={handleChange} showFirstButton showLastButton 
			
		color="secondary"
		/>
	  </Stack> 
		</>
	);
};
 



export default PaginationContent;



