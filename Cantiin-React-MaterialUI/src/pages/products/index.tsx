import React,{Fragment, useState} from "react";

import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';


import ProductCard from "../../components/ProductCard";



/*Types*/
import type { creatingPageComponent, productObject } from "../../types";




/*

export async function getServerSideProps(context) {
  const page:string = (parseInt(context.query.page) || 1).toString();
  // Here we got the "page" query parameter from Context
  // Default value is "1"

  const res = await fetch(`https://cantiin.com/api/products/?page=${page}`);
  const products:{
    count:number,
    next:string|null, previous:string|null,
    results:productObject[]
  } = await res.json();

  let pagesCount:number =parseInt((products.count/10).toPrecision(1))+1;



  return {props: {products: products.results, fillProductsObject:products, pagesCount, 
  currentPage:page
  }}
  // will be passed to the page component as props
}

*/

const ProductsList = (): creatingPageComponent=>{

  const router = useRouter();


  let [loading, setLoading]=useState(true);
  
  let [productsObject, setProductsObject]:
  [productsObject:{products:productObject[], pagesCount:number, currentPage:string}, setProductsObject:any] = 
  useState({products:[], pagesCount:1, currentPage:"1"});

    





  const handleChange = (event: React.ChangeEvent<unknown>, pageNumber: number):void => {
    event.preventDefault()
    router.push({
      pathname: '/products',
      query: { page: pageNumber.toString() },
    });
  };
  
  let productsComponent:JSX.Element[] =productsObject.products.map((product:productObject)=>{
    return(
    <Fragment key={product.id}>
      <ProductCard product={product}/>
    </Fragment>
  )});
  return (
  <>
      <Box
        display="flex"
        justifyContent="center"
        marginBottom={3}
      >
        <Pagination count={productsObject.pagesCount} color="secondary" size="large"
        onChange={handleChange} page={parseInt(productsObject.currentPage)}
        showFirstButton showLastButton/>
      </Box>
        {productsComponent}
      <Box
        display="flex"
        justifyContent="center"
        mt={4}
      >
        <Pagination count={productsObject.pagesCount} color="secondary" size="large"
        onChange={handleChange} page={parseInt(productsObject.currentPage)}
        showFirstButton showLastButton/>
      </Box>
  </>);
}



ProductsList.header="ProductsList";


export default ProductsList;


