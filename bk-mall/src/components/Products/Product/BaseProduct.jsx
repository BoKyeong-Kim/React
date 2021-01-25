import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles'

const BaseProduct = ({ product }) => {
    const classes = useStyles();

    return(
        <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
                {product.price.formatted_with_code}
            </Typography>
        </div>     
    )

}

export default BaseProduct;