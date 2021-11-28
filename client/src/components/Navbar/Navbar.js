import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {AppBar, Typography} from "@mui/material";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAtom} from "jotai";
import decode from 'jwt-decode';


import logo from "../../images/logo.png"
import useStyles from "./styles";
import {userAtom} from "../../App";
import * as actionType from "../../constants/actionTypes";


function Navbar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [userLogged, setUserLogged] = useAtom(userAtom);

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/login');
        setUserLogged(null);
    };

    useEffect(() => {
        const token = userLogged?.token;
        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    },[location])

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
                    <Link to="/manage-event" className={classes.removeUnderline}>
                        <div>
                            <Typography className={classes.links} variant="button">Add Event</Typography>
                        </div>
                    </Link>

                    {userLogged ?
                        <Link to="/logout" className={classes.removeUnderline}>
                        <div>
                            <Typography className={classes.links} variant="button" >Log Out</Typography>
                        </div>
                        </Link>
                   : <Link to="/login" className={classes.removeUnderline}>
                        <div>
                            <Typography className={classes.links} variant="button">Log In</Typography>
                        </div>
                    </Link>}

                </div>
            </AppBar>
        </>
    )
}

export default Navbar;