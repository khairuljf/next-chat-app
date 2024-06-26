'use client';
import { useState,useEffect  } from 'react';
import { useForm } from 'react-hook-form';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Avatar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useRouter } from 'next/navigation';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    password: string;
    confirmPassword: string;
}

export default function Home() {
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
    const { register: loginRegister, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors } } = useForm<FormData>();
    const { register: signupRegister, handleSubmit: handleSignupSubmit, formState: { errors: signupErrors, isValid }, watch } = useForm<FormData>({
        mode: 'onChange',
    });
    const router = useRouter();

    const password = watch('password'); // Watch the 'password' field

    useEffect(() => {
        // Check if token exists in local storage
        const token = localStorage.getItem('authToken');
        if (token) {
            // If token exists, redirect to the dashboard
            router.push('/dashboard');
        }
    }, []);

    const handleLogin = async (data: FormData) => {
        try {
            const response = await axios.post('http://185.164.111.200:3001/api/auth/signin', data);
            console.log('Login successful:', response.data);
            localStorage.setItem('authToken', response.data.token);
            // Optionally handle success message or redirect user
            router.push('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle error, show error message, etc.
        }
    };

    const handleSignup = async (data: FormData) => {
        const upData = {
            "firstName": "khairul",
            "lastName": "islam",
            "email":"khairul@gmail.com",
            "phoneNumber": "0174567384",
            "password":"khairul912"
        }
        try {
            const response = await axios.post('http://185.164.111.200:3001/api/auth/signup', upData);
            console.log('Signup successful:', response.data);
            localStorage.setItem('authToken', response.data.token);
            router.push('/dashboard');
            // Optionally handle success message or redirect user
        } catch (error) {
            console.error('Signup failed:', error);
            // Handle error, show error message, etc.
        }
    };

    const switchForm = () => {
        setIsLogin(!isLogin); // Toggle between login and signup forms
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height:'100vh'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {isLogin ? 'Sign in' : 'Sign up'}
                </Typography>
                <Box component="form" onSubmit={isLogin ? handleLoginSubmit(handleLogin) : handleSignupSubmit(handleSignup)} noValidate sx={{ mt: 1 }}>
                    {!isLogin &&
                        <>
                            <TextField
                                {...signupRegister('firstName', { required: true })}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoComplete="given-name"
                                autoFocus={!isLogin}
                                error={!!signupErrors.firstName}
                                helperText={signupErrors.firstName && "First Name is required"}
                            />
                            <TextField
                                {...signupRegister('lastName', { required: true })}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoComplete="family-name"
                                error={!!signupErrors.lastName}
                                helperText={signupErrors.lastName && "Last Name is required"}
                            />

                            <TextField
                                {...signupRegister('phoneNumber')}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                autoComplete="tel"
                            />
                        </>
                    }
                    <TextField
                        {...(isLogin ? loginRegister('email', { required: true }) : {})}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus={isLogin}
                        error={!!loginErrors.email}
                        helperText={isLogin && loginErrors.email && "Email is required"}
                    />
                    <TextField
                        {...(isLogin ? loginRegister('password', { required: true }) : signupRegister('password', { required: true }))}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={isLogin ? !!loginErrors.password : !!signupErrors.password}
                        helperText={isLogin ? loginErrors.password && "Password is required" : signupErrors.password && "Password is required"}
                    />
                    {!isLogin &&
                        <TextField
                            {...signupRegister('confirmPassword', {
                                required: true,
                                validate: (value) => value === password || "Passwords do not match"
                            })}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            error={!!signupErrors.confirmPassword}
                            helperText={signupErrors.confirmPassword && signupErrors.confirmPassword.message}
                        />
                    }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!isValid} // Disable button if form is not valid
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </Button>
                    <Button
                        fullWidth
                        variant="text"
                        color="primary"
                        onClick={switchForm}
                    >
                        {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
