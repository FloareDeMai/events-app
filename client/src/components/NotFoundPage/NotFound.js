import {Box, Container, CssBaseline, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";


import notFoundPic from '../../images/Lovepik_com-400217866-404-page-error.png'
import useStyles from "./styles";

function NotFound() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <img src={notFoundPic} alt="not found page" className={classes.picture}/>
                <Link to="/" className={classes.link}>
                    <Typography variant="button">Home</Typography>
                </Link>

            </Box>
        </Container>
    )
}

export default NotFound;