import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import Modal from './Modal/Modal';
import useStyles from './styles';

const Products = ({ products, onAddToCart, fetchProduct }) => {
    const classes = useStyles();
    
    return (
        <main className={classes.content}>
            <div className = {classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                        <Modal fetchProduct={fetchProduct} product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;