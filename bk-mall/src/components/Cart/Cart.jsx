import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                 {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );

    if(!cart.line_items) return 'Loading...';

    return(
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shipping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart;