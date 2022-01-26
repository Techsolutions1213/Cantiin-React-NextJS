import { Component, Fragment, useState, useEffect } from "react";
import {getItemsList, getAllResultsNumber,
	getCurrentWindowPage,getCurrentResponsePage,
	getApiResponsePage,getMaxPage} from "../../Functions/fetching/list";
import Pagination from "../../Components/pagination";
import ProductCard from "../../Components/cards/product";


import fetchers from "../../Functions/fetchers";



const ProductsList = () => {
    
	const initialState = {
		"loaded":false,
		"items":[],
		"response":null,
		"success":false,
		"err":null
	};


    
	const [state,setState] = useState(initialState);


	console.log(state);

	const handleSucessfulResponse = (response) =>
	{
		//console.log(response);
        
		setState(
			{
				...state,
				"loaded":true,
				"items":getItemsList(response),
				"response": response,
				"success":true,
				"err":null
			});
		//console.log(state);
	};
    

	const handleFailingResponse = (err) =>
	{

		/*console.log(err);
        console.log(err.toString());
        console.log(err.response);*/
        
		let error = "Something went wrong";
		try {
			error=err.response.data.detail;
			if(error== undefined)
			{error="Something went wrong";}
		} catch (error) {
		}
        
		setState({
			...state,
			"loaded":true,
			"items":[],
			"response":null,
			"success":false,
			"err":<div className="message-of-error-page">{error}</div>
		}
		);
	};



	useEffect(()=>{
		setState(initialState);
		fetchers.products.list(getCurrentWindowPage())
			.then((response)=>{handleSucessfulResponse(response);})
			.catch((err)=>{handleFailingResponse(err);});       
	},[window.location.href]);
    
    
	if (!state.loaded)
	{

		return (
			<div>
				<h1>Products List:</h1>
				<div>Loading...</div>
			</div>
		);
	}
    
	if(state.success)
	{
		let productsList = state.items.map(product=>{return(
        
			<ProductCard key={product.id} item={product}/>
		);}
		);
    
		return (
			<div>
				<h1>Products List:</h1>
				<Pagination response={state.response}/>
				<ul className="ProductsList">
					{productsList}
				</ul>
			</div>
		);
	}

	return (
		<div>
			<h1>Products List:</h1>
			<div>{state.err}</div>
		</div>
	);
};
 
export default ProductsList;
