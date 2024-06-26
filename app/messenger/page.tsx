// app/page.js
'use client';

import Link from 'next/link';
import {Box, Button} from '@mui/material';
import Chats from "@/app/components/Chats";
import Layout from "@/app/dashboard/Layout";
import Messenger from "@/app/components/ChatsMessenger";

export default function Home() {
    return (
        <Layout>
            <Messenger />
        </Layout>



    );
}