// app/page.js
'use client';
import { useEffect  } from 'react';
import Link from 'next/link';
import {Box, Button} from '@mui/material';
import { useRouter } from 'next/navigation';
export default function Home() {

    const  router = useRouter();

    useEffect(() => {
        // Check if token exists in local storage
        const token = localStorage.getItem('authToken');
        if (token) {
            // If token exists, redirect to the dashboard
            router.push('/dashboard');
        }
    }, []);

    return (
        <Box sx={ {
                width:'100%',height:'100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap:3,
            }}>
            <h1>Welcome to ChatOn AI</h1>
            <Link href="/login" passHref>
                <Button variant="contained" color="primary">
                    Go to Login
                </Button>
            </Link>
        </Box>
    );
}