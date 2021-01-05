import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles';

const product_test = [
    { id : 1, name : 'iphone', price : '$100', description : 'apple i phone'},
    { id : 2, name : 'macbook', price : '$350', description : 'apple mac book pro'},
    { id : 3, name : 'apple watch', price : '$90', description : 'apple watch 6'},
    { id : 4, name : 'air pot', price : '$55', description : 'apple air pot pro'}
]

const Products = ({products}) => {
    const classes = useStyles();

    console.log(product_test)

    return (
        <main className={classes.content}>
            <div className = {classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {product_test.map((product) => (
                    <Grid item key={product_test.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;