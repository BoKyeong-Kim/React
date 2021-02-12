import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import  Darkmode from './Darkmode/Darkmode';

import logo from '../../assets/rocketlogo.png'
import useStyles from './styles';

const Navbar = ({ totalItems }) => { 
    const classes = useStyles();
    const location = useLocation();

    return (
        <AppBar position="fixed" className={classes.appbar} >
                <Toolbar>
                    <Typography className={classes.title} color="inherit">
                        <img className={classes.image} src={logo} alt="bkmall" height="25px" />
                        BK-mall
                    </Typography>
                    <Darkmode />
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                        <IconButton component={ Link } to="cart" aria-label="Show cart items" className={classes.menuButton}  color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
    )
}

export default Navbar;