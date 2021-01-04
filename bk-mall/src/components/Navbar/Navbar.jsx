import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

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
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <AddShoppingCart />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;