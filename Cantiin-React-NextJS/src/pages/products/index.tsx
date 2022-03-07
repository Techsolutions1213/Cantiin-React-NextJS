import React,{Fragment, useState, useEffect} from "react";

import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';


import ProductCard from "../../components/ProductCard";



/*Types*/
import type { creatingPageComponent, productObject } from "../../types";
import { Typography } from "@mui/material";




const ProductsList = (): creatingPageComponent=>{

  const router:any = useRouter();
  console.log(router);
  const currentPage:string = (parseInt(router.query.page) || 1).toString();
  console.log(currentPage);

  let [loading, setLoading]=useState(true);
  
  let [productsObject, setProductsObject]:
  [productsObject:{products:productObject[], pagesCount:number}, setProductsObject:any] = 
  useState({products:[], pagesCount:1});

    

  useEffect(()=>{
    
    (async()=>{
      const res = await fetch(`https://cantiin.com/api/products/?page=${currentPage}`);
      const products:{
        count:number,
        next:string|null, previous:string|null,
        results:productObject[]
      } = await res.json();
    
      let pagesCount:number =parseInt((products.count/10).toPrecision(1))+1;
      
      setProductsObject({products:products.results, pagesCount});
      setLoading(false);

    })()
  }, [currentPage]);










  const handleChange = (event: React.ChangeEvent<unknown>, pageNumber: number):void => {
    event.preventDefault()
    router.push({
      pathname: '/products',
      query: { page: pageNumber.toString() },
    });
  };
  

  console.log("productsObject",productsObject);


  if(productsObject.products===undefined){
    setLoading(true);
    setProductsObject({products:[], pagesCount:1});

    router.push({
      pathname: '/products',
      query: { page: 1 },
    });
    return <></>;
  }



  let productsComponent:JSX.Element =
  loading?<Typography align="center" variant="h3">Loading...</Typography>:
  <>
    {productsObject.products.map((product:productObject)=>{
      return(
      <Fragment key={product.id}>
        <ProductCard product={product}/>
      </Fragment>
    )})}
  </>
  ;
  
  







  
  
  
  
  
  
  
  
  return (
  <>
      <Box
        display="flex"
        justifyContent="center"
        marginBottom={3}
      >
        <Pagination count={productsObject.pagesCount} color="secondary" size="large"
        onChange={handleChange} page={parseInt(currentPage)}
        showFirstButton showLastButton/>
      </Box>
        {productsComponent}
      <Box
        display="flex"
        justifyContent="center"
        mt={4}
      >
        <Pagination count={productsObject.pagesCount} color="secondary" size="large"
        onChange={handleChange} page={parseInt(currentPage)}
        showFirstButton showLastButton/>
      </Box>
  </>);
}



ProductsList.header="Products List";


export default ProductsList;


