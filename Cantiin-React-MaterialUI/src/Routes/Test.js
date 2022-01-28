import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function ImgMediaCard() {
  return (
    <Card sx={{ backgroundColor:"success" }}>

      <CardContent>
        
        
        <div style={{display:"flex"}}>
        <Typography gutterBottom variant="h4" component="div" sx={{flexGrow:1}}>
          Product Title
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{color:"green"}}>
          in Stock
        </Typography>
        </div>

        <Typography variant="body1" color="text.secondary" sx={{color:"darkgreen", fontWeight:"bold"}}>
          Price
        </Typography>

        

      </CardContent>

    </Card>
  );
}
