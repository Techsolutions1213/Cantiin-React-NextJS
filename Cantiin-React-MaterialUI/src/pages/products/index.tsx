import React from "react";

/*Types*/
import type { creatingPageComponent } from "../../types";



export async function getServerSideProps(context) {
  const page = context.query.page || "1";
  // Here we got the "page" query parameter from Context
  // Default value is "1"

  const res = await fetch(`https://cantiin.com/api/products/?page=${page}`);
  const products = await res.json();
  return {props: {products: products.results}}
  // will be passed to the page component as props
}







const ProductsList = ({products}): creatingPageComponent=>{
  console.log(products);
  return (
  <>
    Products List
  </>);
}



ProductsList.header="ProductsList";


export default ProductsList;


