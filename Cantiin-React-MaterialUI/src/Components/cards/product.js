import React, { Component, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function ProductCard(props) {
    const [state, setState] = useState({"product":props.item});
    let productCardClassName= "productCard productCardOutOfStock";
    let inStockText = "Out Of Stock"; 
    let inStockStyle = "productCard-Element productCard-productInStock productCard-productInStock-Out";
    if(state.product.in_stock){
        productCardClassName= "productCard productCardInStock";
        inStockText = "In Stock";
        inStockStyle = "productCard-Element productCard-productInStock productCard-productInStock-In";
    }

  return (
    <Card sx={{mb:3}}>

      <CardContent >
        
        
        <div style={{display:"flex"}}>
        <Typography gutterBottom variant="h4" component="div" sx={{flexGrow:1}}>
          {state.product.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{color:"green"}}>
            {inStockText}
        </Typography>
        </div>

        <Typography variant="body1" color="text.secondary" sx={{color:"darkgreen", fontWeight:"bold"}}>
        ${state.product.price}
        </Typography>
      </CardContent>

    </Card>
  );
}
