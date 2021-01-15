import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart
            <Link to="/" className={classes.link}>start adding some</Link>
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
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal : {cart.subtotal.formatted_with_code}</Typography>
                <div>
                    <Button className={classes.emptyButton} color="secondary" size="large" type="button" variant="contained">Empty Button</Button>
                    <Button component={Link} to="checkout" className={classes.checkoutButton} color="primary" size="large" type="button" variant="contained">Checkout</Button>
                </div>
            </div>
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