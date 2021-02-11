import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Switch,Toolbar, CssBaseline, AppBar, Typography } from '@material-ui/core';
import {
    orange,
    lightBlue,
    deepPurple,
    deepOrange
} from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
      rroot: {
        display: "flex"
      },
      toolbar: {
        paddingRight: 24 
      },
      toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
      },
      menuButton: {
        marginRight: 36
      },
      menuButtonHidden: {
        display: "none"
      },
      title: {
        flexGrow: 1
      },
      
      appBarSpacer: theme.mixins.toolbar,
      
}));    

const Darkmode = () => {
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
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

    return (
      <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              BK-MALL
            </Typography>
            <Switch checked={darkState} onChange={handleThemeChange} />
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
    )
}

export default Darkmode;
