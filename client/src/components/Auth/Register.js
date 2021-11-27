import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Visibility, VisibilityOff} from "@mui/icons-material";

import {register} from "../../actions/auth";
import UtilService from "../../utils/utils";
import ImageUpload from "../Shared/ImageUpload";

const initialState = {name: '', email: '', password: '', confirmPassword: '', image: ''};
const theme = createTheme();

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const [errors, setErrors] = useState({
        short: '',
        mismatch: '',
    })
    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});
    const handleSubmit = (event) => {
        event.preventDefault();
        if (UtilService.validateFields(form, setErrors)) {
            return
        }
        const formData = new FormData();
        formData.append("name", form.name)
        formData.append("email", form.email)
        formData.append("password", form.password)
        formData.append("confirmPassword", form.confirmPassword)
        formData.append("image", file)
        dispatch(register(formData, navigate))
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
                    }}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box sx={{mt: 3}}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <ImageUpload setFile={setFile} file={file}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="email"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        onChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="password"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        onChange={handleChange}
                                        error={errors.short !== ''} helperText={errors.short}
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleShowPassword}>
                                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                    </IconButton>
                                                </InputAdornment>
                                        }}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="confirm password"
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        onChange={handleChange}
                                        error={Boolean(errors?.mismatch)}
                                        helperText={errors?.mismatch}
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleShowConfirmPassword}>
                                                        {showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                                                    </IconButton>
                                                </InputAdornment>
                                        }}/>
                                </Grid>
                            </Grid>
                            <Button
                                style={{backgroundColor: "#673AB7"}}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}>
                                Sign Up
                            </Button>
                        </form>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>)
}

export default Register;