// app/page.js
'use client';

import Link from 'next/link';
import {Box, Button} from '@mui/material';
import History from "@/app/components/History";
import Layout from "@/app/dashboard/Layout";
import TasksForAi from "@/app/components/TasksForAi";

export default function Home() {
    return (
        <Layout>
            <TasksForAi />
        </Layout>
    );
}