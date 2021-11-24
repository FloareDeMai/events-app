import React from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";


import logo from "../../images/logo.png"
import useStyles from "./styles";

function Navbar() {
    const classes = useStyles();
    return (
        <>
           <AppBar>
               <div>
                   <img src={logo} alt="logo" height="60"/>
                   <Typography variant="h2" align="center">
                       Events
                   </Typography>
               </div>
           </AppBar>
        </>
    )
}

export default Navbar;