import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = () => { 
    const classes = useStyles();
    
    return (
        <>
            <AppBar position="fixed" className={classes.appbar} >
                <Toolbar>
                    <Typography>
                        BK-mall
                    </Typography>
                    <div className={classes.grow} />
                        <div className={classes.button}>
                        <IconButton aria-label="cart" className={classes.menuButton}>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;