import React from 'react';
import { Container, Toolbar } from '@material-ui/core';

import useStyles from './styles';

const Cart = () => {
    const classes = useStyles();

    return(
        <Container className={classes.root}>
            <Toolbar />
        </Container>
    )
}

export default Cart;