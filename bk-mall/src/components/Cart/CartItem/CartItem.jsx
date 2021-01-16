import React from 'react';
import { Typography, CardContent, Card, CardMedia, Button, CardActions } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty }) => {
    const classes = useStyles();

    console.log(item)
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cartContent}>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h6">{item.line_total.formatted_with_code}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;