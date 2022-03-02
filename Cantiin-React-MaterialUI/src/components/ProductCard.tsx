import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <div style={{display:"flex", justifyContent:"space-between"}}>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {product.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {product.in_stock?"In Stock":"Out Of Stock"}
        </Typography>
        </div>
        <div>
            ${product.price}
        </div>
      </CardContent>

    </Card>
  );
}
