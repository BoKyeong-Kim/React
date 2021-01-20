import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import RecItem from './RecItem/RecItem';

const Cart = ({ products, cart, handleUpdateCartQty, handleRemoveFromUpdate, handleEmptyCart }) => {
    const classes = useStyles();
    const product = products.sort(() => Math.random() - Math.random())
                    .find(() => true);

    const EmptyCart = () => (
        <>
        <Typography variant="subtitle1">
            <div>
                You have no items in your shopping cart
            </div>
            <Button component={Link} to="/" className={classes.link} type="button" color="primary" variant="contained"> start adding some</Button>
        </Typography>
        <div className={classes.space}/>
        <Typography variant="h4" >
            <div>이런 상품은 어떠신가요?</div>
        </Typography>
        <Grid container spacing={4}>
            {product && products.map((product)=> (
                <Grid item key={products.id} xs={4}>
                    <RecItem product={product}/> 
                </Grid>
            ))}
        </Grid>
        </>
   );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                 {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromUpdate}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal : {cart.subtotal.formatted_with_code}</Typography>
                <div>
                    <Button className={classes.emptyButton} color="secondary" size="large" type="button" variant="contained" onClick={handleEmptyCart}>Empty Button</Button>
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