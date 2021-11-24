import React from "react";
import { AppBar, Typography } from "@mui/material";


import logo from "../../images/logo.png"
import useStyles from "./styles";

function Navbar() {
    const classes = useStyles();
    return (
        <>
           <AppBar className={classes.appBar} position="static" color="inherit">
               <div className={classes.brandContainer}>
                   <img className={classes.image} src={logo} alt="logo" height="60"/>
                   <Typography className={classes.heading} variant="h2" align="center">
                       Events
                   </Typography>
               </div>
           </AppBar>
        </>
    )
}

export default Navbar;