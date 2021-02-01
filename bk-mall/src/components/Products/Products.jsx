import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles';

const Products = ({ products, onAddToCart, fetchProduct, detail }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className = {classes.toolbar} />
            {/* 여기에 modal component 추가 - detail props 넘김 */}
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} fetchProduct={fetchProduct} detail={detail}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;