import {settings} from "../../settings";
import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    getUrlPage} from "../urls";


function getItemsList(response)
{return response.data.results;}

function getAllResultsNumber(response)
{return response.data.count;}





function getCurrentWindowPage()
{return getUrlPage(window.location.href);}

function getCurrentResponsePage(response)
{return getUrlPage(response.config.url);}




function getApiResponsePage(response,next)
{
    let otherAPiUrl = response.data.previous;
    if(next){otherAPiUrl = response.data.next;}


    if(!otherAPiUrl){return null;}

    let nextApiPage = getUrlPage(otherAPiUrl);

    let currentUrl = window.location.href;
    let currentPureUrl= getPureUrl(currentUrl);
    let newQueryParams= getUrlQueryParameters(currentUrl);
    newQueryParams.page = nextApiPage;
    return buildUrl(currentPureUrl,newQueryParams);

}



function getMaxPage(response, perPage=settings.defaultPerPage)
{
    //console.log( Math.ceil(1));//1
    //console.log( Math.ceil(1.0));//1
    //console.log( Math.ceil(1.1));//2
    
    return  Math.ceil(response.data.count/perPage);

}




export {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
    getApiResponsePage,getMaxPage};
