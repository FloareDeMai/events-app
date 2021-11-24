import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import logo from "../../images/logo.png"
import addIcon from "../../images/add.png"
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

               <Link to="/manage-event">
                   <div>
                       <img
                           src={addIcon}
                           alt="icon"
                           height="60"
                           className={classes.image}
                       />
                   </div>
               </Link>
           </AppBar>
        </>
    )
}

export default Navbar;