import React,{Fragment} from "react";

import ProductCard from "../../components/ProductCard";


/*Types*/
import type { creatingPageComponent, productObject } from "../../types";






export async function getServerSideProps(context) {
  const page = context.query.page || "1";
  // Here we got the "page" query parameter from Context
  // Default value is "1"

  const res = await fetch(`https://cantiin.com/api/products/?page=${page}`);
  const products = await res.json();
  return {props: {products: products.results}}
  // will be passed to the page component as props
}







const ProductsList = ({products}:{products:productObject[]}): creatingPageComponent=>{
  console.log(products);
  let productsComponent:JSX.Element[] = products.map((product:productObject)=>{
    return(
    <Fragment key={product.id}>
      <hr/>
      <div>{product.id}</div>
      <div>{product.in_stock}</div>
      <div>{product.name}</div>
      <div>{product.price}</div>


      <ProductCard product={product}/>


    </Fragment>
  )});
  return (
  <>
    {productsComponent}
  </>);
}



ProductsList.header="ProductsList";


export default ProductsList;


