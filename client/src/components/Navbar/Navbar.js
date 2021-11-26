import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import logo from "../../images/logo.png"
import useStyles from "./styles";

function Navbar() {
    const classes = useStyles();
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
           <AppBar className={classes.appBar} position="static" color="inherit">
               <div className={classes.brandContainer}>
                   <img className={classes.image} src={logo} alt="logo" height="60"/>
                   <Typography className={classes.heading}
                              component={Link} to="/" variant="h2" align="center">
                       Events
                   </Typography>
               </div>

               <div className={classes.navbarLinks}>
               <Link to="/manage-event" >
                   <div>
                       <Typography className={classes.links} variant="h5">Add Event</Typography>
                   </div>
               </Link>

               <Link to="/login">
                   <div>
                       <Typography className={classes.links} variant="h5">Log In</Typography>
                   </div>
               </Link>
               </div>
           </AppBar>
        </>
    )
}

export default Navbar;