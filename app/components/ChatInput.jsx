// src/ChatInput.js
import React, {useState} from 'react';
import {Box, IconButton, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({onSend}) => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <Box className={'message-input'}>
            <TextField
                variant="outlined"
                fullWidth
                value={message}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
            />
            <IconButton color="primary" onClick={handleSend}>
                <SendIcon/>
            </IconButton>
        </Box>
    );
};

export default ChatInput;
