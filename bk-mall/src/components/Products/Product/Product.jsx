import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

import BaseProduct from './BaseProduct';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return(
        <>
            <Card className={classes.root}>
            <CardMedia className={classes.media} title={product.name} image={product.media.source}/>
            <CardContent>
            <BaseProduct product={product}/>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            </CardContent>
        </Card>
        </>
    )

}

export default Product;