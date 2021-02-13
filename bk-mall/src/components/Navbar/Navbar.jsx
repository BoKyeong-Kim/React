import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, CssBaseline, Switch  } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import clsx from "clsx";
import {orange, lightBlue, deepPurple, deepOrange} from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import logo from '../../assets/rocketlogo.png'
import useStyles from './styles';

const Navbar = ({ totalItems }) => { 
    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
    const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
    const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
    const classes = useStyles();
    const location = useLocation();
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute"
          className={clsx(classes.appBar, classes.appBarShift)}
         >
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap>
                        <img className={classes.image} src={logo} alt="bkmall" height="25px" />
                        BK-mall
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                        <IconButton component={ Link } to="cart" aria-label="Show cart items" className={classes.menuButton}  color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                    <Switch checked={darkState} onChange={handleThemeChange} className={classes.button}/>
                    
                </Toolbar>
            </AppBar>
            </div>
            </ThemeProvider>
    )
}

export default Navbar;