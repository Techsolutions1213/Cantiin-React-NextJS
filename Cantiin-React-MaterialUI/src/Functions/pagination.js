import { Fragment } from "react";

import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    	getUrlPage} from "./urls";

import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
	getApiResponsePage,getMaxPage} from "../Functions/fetching/list";


import PaginationButton from "../Components/paginationButton";



function getCurrentPagePaginationButton(currentUrl=window.location.href)
{
	return <PaginationButton type="number" active={true} link={currentUrl}/>;
}



function getPrevPagePaginationButton(currentUrl=window.location.href)
{
	//console.log(`currentUrl: ${currentUrl}`);
    
	let currentPageNumber = getUrlPage(currentUrl);

	//console.log(`currentUrl: ${currentUrl}`);
	//console.log(`currentPageNumber: ${currentPageNumber}`);

	if(currentPageNumber<=1)
	{
		//console.log("it is less than or equals 1");
		return <PaginationButton type="prev"/>;
	}
    
	let link = buildUrl(getPureUrl(currentUrl),
		{...getUrlQueryParameters(currentUrl),"page":currentPageNumber-1});
	return <PaginationButton type="prev" link={link}/>;
}

        



function getFirstPagePaginationButton(currentUrl=window.location.href)
{
	let currentPageNumber = getUrlPage(currentUrl);
	if(currentPageNumber<=1)
	{return <PaginationButton type="first"/>;}
        
	let link = buildUrl(getPureUrl(currentUrl),
		{...getUrlQueryParameters(currentUrl),"page":1});
	return <PaginationButton type="first" link={link}/>;
}












function getNextPagePaginationButton(currentUrl=window.location.href,maxPageNumber)
{
	let currentPageNumber = getUrlPage(currentUrl);
	if(currentPageNumber>=maxPageNumber)
	{return <PaginationButton type="next"/>;}
        
	let link = buildUrl(getPureUrl(currentUrl),
		{...getUrlQueryParameters(currentUrl),"page":currentPageNumber+1});
	return <PaginationButton type="next" link={link}/>;
}






function getLastPagePaginationButton(currentUrl=window.location.href,maxPageNumber)
{
	let currentPageNumber = getUrlPage(currentUrl);
	if(currentPageNumber>=maxPageNumber)
	{return <PaginationButton type="last"/>;}
        
	let link = buildUrl(getPureUrl(currentUrl),
		{...getUrlQueryParameters(currentUrl),"page":maxPageNumber});
	return <PaginationButton type="last" link={link}/>;

}









function getPrevPagesPaginationButtons(currentUrl=window.location.href)
{
	let currentPageNumber = getUrlPage(currentUrl);
	let currentPureUrl = getPureUrl(currentUrl);
	let currentQueryParameters = getUrlQueryParameters(currentUrl);


	let linkFirst = "";
	let linkMinusOne = "";
	let linkMinusTwo = "";
	let linkMinusThree = "";


	let firstButton ="";
	let minusOneButton ="";
	let minusTwoButton ="";
	let minusThreeButton ="";
	let dottedButton = "";


	if(currentPageNumber > 1)
	{
		linkFirst = buildUrl(currentPureUrl,{...currentQueryParameters,"page":1});
		firstButton =<PaginationButton type="number" link={linkFirst}/>;
	}
	if(currentPageNumber > 2)
	{
		linkMinusOne = buildUrl(currentPureUrl,
			{...currentQueryParameters,"page":currentPageNumber-1});
		minusOneButton =<PaginationButton type="number" link={linkMinusOne}/>;

	}
	if(currentPageNumber > 3)
	{
		linkMinusTwo = buildUrl(currentPureUrl,
			{...currentQueryParameters,"page":currentPageNumber-2});
		minusTwoButton =<PaginationButton type="number" link={linkMinusTwo}/>;

	}
	if(currentPageNumber > 4)
	{
		linkMinusThree = buildUrl(currentPureUrl,
			{...currentQueryParameters,"page":currentPageNumber-3});
		minusThreeButton =<PaginationButton type="number" link={linkMinusThree}/>;
	}
	if(currentPageNumber > 5)
	{
		dottedButton = <PaginationButton type="dotted"/>;
	}


	return <Fragment>
		{firstButton}
		{dottedButton}
		{minusThreeButton}
		{minusTwoButton}
		{minusOneButton}
	</Fragment>
	;
}








function getNextPagesPaginationButtons(currentUrl=window.location.href,maxPageNumber)
{

	let currentPageNumber = getUrlPage(currentUrl);
	let currentPureUrl = getPureUrl(currentUrl);
	let currentQueryParameters = getUrlQueryParameters(currentUrl);


	let linkLast = "";
	let linkPlusOne = "";
	let linkPlusTwo = "";
	let linkPlusThree = "";


	let lastButton ="";
	let plusOneButton ="";
	let plusTwoButton ="";
	let plusThreeButton ="";
	let dottedButton = "";
    
	let pagesDifference = maxPageNumber-currentPageNumber;


	if(pagesDifference > 0)
	{
		linkLast = buildUrl(currentPureUrl,
			{...currentQueryParameters,"page":maxPageNumber});
		lastButton =<PaginationButton type="number" link={linkLast}/>;
	}
	if(pagesDifference > 1)
	{
		linkPlusOne = buildUrl(currentPureUrl,
			{...currentQueryParameters,"page":currentPageNumber+1});
		plusOneButton =<PaginationButton type="number" link={linkPlusOne}/>;

	}
	if(pagesDifference > 2)
	{
		linkPlusTwo = buildUrl(currentPureUrl,
			{...currentQueryParameters,"page":currentPageNumber+2});
		plusTwoButton =<PaginationButton type="number" link={linkPlusTwo}/>;

	}
	if(pagesDifference > 3)
	{
		linkPlusThree = buildUrl(currentPureUrl,
			{...currentQueryParameters,"page":currentPageNumber+3});
		plusThreeButton =<PaginationButton type="number" link={linkPlusThree}/>;
	}
	if(pagesDifference > 4)
	{
		dottedButton = <PaginationButton type="dotted"/>;
	}

	return <Fragment>
		{plusOneButton}
		{plusTwoButton}
		{plusThreeButton}
		{dottedButton}
		{lastButton}
	</Fragment>
	;
}












export {getCurrentPagePaginationButton,getPrevPagePaginationButton,
	getFirstPagePaginationButton,getNextPagePaginationButton,
	getLastPagePaginationButton, getPrevPagesPaginationButtons, getNextPagesPaginationButtons};
