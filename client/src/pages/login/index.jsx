import React from 'react'
import { useState } from 'react';

import { Box, Avatar, TextField, Button, Typography, Container } from '@mui/material'

import { API } from '../../services/api.js';

const signupInitialValues = {
    name: "",
    username: "",
    password: "",
}

const loginInitialValues = {
    username: "",
    password: "",
}

const Login = () => {

    const imageURL = 'https://cdn.pixabay.com/photo/2022/01/11/21/48/edit-6931553_640.png';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');
    const [login, setLogin] = useState(loginInitialValues);

    const toggleSignup = () => {
        account === 'login' ? toggleAccount('signup') : toggleAccount('login');
    }

    const onInput = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        //Calling API for adding user
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            setError('Something went wrong! please try again later');
        }
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        //Calling API for authenticating User
        let res = await API.userLogin(login);

        if (res.isSuccess) {
            setError('');
        } else {
            setError('Something went wrong! please try again later');
        }
    }

    return (
        <Container maxWidth="sm" sx={{
            height: "100vh",
            marginTop: { xs: "45%", lg: "10%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Avatar
                alt="Login"
                src={imageURL}
                sx={{ width: 200, height: 200 }}
            />
            {
                account === 'login' ?
                    <Box>
                        <Container maxWidth="sm" sx={{
                            marginTop: "10%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1em"
                        }}>
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                value={login.username}
                                onChange={(e) => onValueChange(e)}
                                name='username'
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={login.password}
                                onChange={(e) => onValueChange(e)}
                                name='password'
                            />
                            {error && <Typography>{error}</Typography>}
                        </Container>

                        <Container maxWidth="sm"
                            sx={{
                                marginTop: "10%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                            <Button variant="contained" onClick={() => loginUser()}>Login</Button>
                            <Typography variant="h6" gutterBottom sx={{ marginTop: "4%", color: "#666" }}>
                                OR
                            </Typography>
                            <Button variant="text" onClick={() => toggleSignup()}>Create Account</Button>
                        </Container>
                    </Box> :
                    <Box>
                        <Container maxWidth="sm" sx={{
                            marginTop: "10%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1em"
                        }}>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                onChange={(e) => onInput(e)}
                                name='name'
                            />
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                onChange={(e) => onInput(e)}
                                name='username'
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => onInput(e)}
                                name='password'
                            />
                            {error && <Typography>{error}</Typography>}
                        </Container>

                        <Container maxWidth="sm"
                            sx={{
                                marginTop: "10%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                            <Button variant="contained" onClick={() => signupUser()}>Signup</Button>
                            <Typography variant="h6" gutterBottom sx={{ marginTop: "4%", color: "#666" }}>
                                OR
                            </Typography>
                            <Button variant="text" onClick={() => toggleSignup()}>Already Have Account</Button>
                        </Container>
                    </Box>
            }
        </Container>
    )
}

export default Login