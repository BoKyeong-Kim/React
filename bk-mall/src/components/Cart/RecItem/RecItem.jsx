import React from 'react';
import { Card, CardMedia, Typography, CardContent } from '@material-ui/core';

import useStyles from './styles';

const RecItem = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={product.name} image={product.media.source}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom> 
                        {product.name}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )

}

export default RecItem;