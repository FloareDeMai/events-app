import {
    Box,
    Container,
    CssBaseline,
    Grid,
    Typography
} from "@mui/material";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAtom} from "jotai";

import useStyles from "../LogOut/styles";
import * as actionType from "../../constants/actionTypes";
import {userAtom} from "../../App";


function LogOut() {
    const [userLogged, setUserLogged] = useAtom(userAtom);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        dispatch({type: actionType.LOGOUT})
        navigate('/')
        setUserLogged(null)
    };
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box sx={{mt: 1}}>
                    <Grid container>
                        <Grid item>
                            <Typography className={classes.links} variant="button"  onClick={handleLogOut}>
                                Log Out
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default LogOut;





