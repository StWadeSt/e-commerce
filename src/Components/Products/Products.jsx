import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../Products/Product/Product';
import useStyles from './styles';

import image1 from '../../images/Running Shoes.jpg';
import image2 from '../../images/laptop.jpg';
import image3 from '../../images/headphones.jpg';

const products =[

     {id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$55', image:image1},
     {id: 2, name: 'Asus Laptop', description: 'Gaming Laptop.', price: '$500', image: image2 },
     {id: 3, name: 'Headphones', description: 'Gaming Headphones.', price: '$50', image: image3 },

];

const Products = () =>{
    const classes = useStyles();
    
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
               
            </Grid>
        </main>
    );
}

export default Products;
