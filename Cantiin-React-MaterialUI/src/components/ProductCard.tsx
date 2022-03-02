import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';

/*Types*/
import type { productObject } from '../types';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProductCard({product}:{product:productObject}):JSX.Element {
    
    let inStockColor:string = product.in_stock?"green":"red";
  
    return (
    <Card sx={{ minWidth: 275, mb:2 }}>
      <CardContent>
        
        <div style={{display:"flex", justifyContent:"space-between"}}>

        <Typography variant="h4" color="success" gutterBottom>
          {product.name}
        </Typography>
        <Typography color={inStockColor} variant="h5" gutterBottom>
          {product.in_stock?"In Stock":"Out Of Stock"}
        </Typography>
        </div>
        <div>
            <Typography color={green[700]} sx={{fontWeight:"bold"}} variant="h6">
                ${product.price}
            </Typography>
        </div>
      </CardContent>

    </Card>
  );
}
