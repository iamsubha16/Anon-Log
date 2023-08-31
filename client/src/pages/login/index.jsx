import React from 'react'
import { useState } from 'react';

import { Box, Avatar, TextField, Button, Typography, Container } from '@mui/material'

const signupInitialValues = {
    name: "",
    username: "",
    password: "",
}

const Login = () => {

    const imageURL = 'https://cdn.pixabay.com/photo/2022/01/11/21/48/edit-6931553_640.png';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);

    const toggleSignup = () => {
        account === 'login' ? toggleAccount('signup') : toggleAccount('login');
    }

    const onInput = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
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
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Container>

                        <Container maxWidth="sm"
                            sx={{
                                marginTop: "10%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                            <Button variant="contained">Login</Button>
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
                        </Container>

                        <Container maxWidth="sm"
                            sx={{
                                marginTop: "10%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                            <Button variant="contained">Login</Button>
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