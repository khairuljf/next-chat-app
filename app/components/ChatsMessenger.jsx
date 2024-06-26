// src/Home.js
import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import {mainContent, messenger} from "../AppStyle";
import {useRouter} from 'next/navigation';
import ChatInput from "./ChatInput";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BoltIcon from '@mui/icons-material/Bolt';
import ChatListItem from "./ChatListItem";

const Messenger = () => {

    const router = useRouter();
    const [messages, setMessages] = useState([]);

    const handleSend = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const handleNavigate = () => {
        console.log('clicked')
        router.push('/messenger');
    }


    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Box sx={{...mainContent, backgroundColor: '#000'}} className={"main-content"}>
                <ChatListItem/>
                <Box className={'messenger'} sx={messenger}>
                    <Box sx={{padding: 2}}>
                        <Box className={'turbo-gpt-tab'}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="icon position tabs example"
                            >
                                <Tab icon={<AutoFixHighIcon/>} iconPosition="start" label="GPT-Turbo"/>
                                <Tab icon={<BoltIcon/>} iconPosition="start" label="GPT-4"/>
                            </Tabs>

                        </Box>

                        <Box

                            className={"message-reply-history"}
                        >
                            {messages.map((msg, index) => (
                                <Typography key={index} variant="body1" sx={{marginBottom: 1}}>
                                    {msg}
                                </Typography>
                            ))}
                        </Box>
                        <ChatInput onSend={handleSend}/>
                    </Box>
                </Box>
            </Box>

        </>
    );
};

export default Messenger;
