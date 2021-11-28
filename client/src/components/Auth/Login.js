import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography, InputAdornment, IconButton
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {login} from "../../actions/auth";
import {useAtom} from "jotai";
import {userAtom} from "../../App";
import UtilService from "../../utils/utils";



const initialState = { email: '', password: ''};
const theme = createTheme();

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [errorHandler, setErrorHandler] = useState({
        hasError: false,
        message: "",
    })
    const [userLogged, setUserLogged] = useAtom(userAtom);


    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form, setUserLogged, navigate, setErrorHandler))
    }

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    useEffect(() => {
        if(errorHandler.hasError){
            showToastError(errorHandler.message)
        }
    },[errorHandler])

    const showToastError = (message) => {
        toast.error(message, UtilService.toastBody);
    };

    return (
        <ThemeProvider theme={theme}>
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
                    <Avatar sx={{m: 1, bgcolor: '#673AB7'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{mt: 1}}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPassword}>
                                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                }}
                            />
                            <Button
                                style={{backgroundColor: "#673AB7"}}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                        </form>
                        <Grid container>
                            <Grid item>
                                <Link to="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Login;