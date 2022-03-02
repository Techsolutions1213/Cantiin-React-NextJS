import React,{Fragment} from "react";

import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';


import ProductCard from "../../components/ProductCard";



/*Types*/
import type { creatingPageComponent, productObject } from "../../types";






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







const ProductsList = ({products, fillProductsObject, pagesCount, currentPage}:
  {products:productObject[],fillProductsObject:any, pagesCount:number, currentPage:number}): 
  creatingPageComponent=>{
  
  let productsComponent:JSX.Element[] = products.map((product:productObject)=>{
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
      >
        <Pagination count={pagesCount} color="secondary" />
      </Box>
        {productsComponent}
      <Box
        display="flex"
        justifyContent="center"
      >
        <Pagination count={pagesCount} color="secondary" />
      </Box>
  </>);
}



ProductsList.header="ProductsList";


export default ProductsList;


