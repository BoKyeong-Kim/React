import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles';

const product_test = [
    { id : 1, name : 'iphone', price : '$100', description : 'apple i phone'},
    { id : 2, name : 'macbook', price : '$350', description : 'apple mac book pro'}
]

const Products = ({products}) => {
    const classes = useStyles();

    console.log(product_test)

    return (
        <main className={classes.content}>
            <div className = {classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {product_test.map((product) => (
                    <Grid key={product_test.key} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;