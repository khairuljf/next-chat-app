import React from 'react';
import {Box, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import {useRouter} from 'next/navigation';

const Sidebar = () => {

    const router = useRouter();

    const navigateTo = (route) => {
        router.push(route); // Navigate to the specified route
    };

    return (
        <>
            <Box variant="permanent" className={'sidebar-nav'}>
                <List>
                    <ListItem button onClick={() => navigateTo('/dashboard')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chats" />
                    </ListItem>
                    <ListItem button onClick={() => navigateTo('/task-for-ai')}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tasks for AI" />
                    </ListItem>
                    <ListItem button onClick={() => navigateTo('/history')}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="History" />
                    </ListItem>
                </List>
            </Box>
        </>
    );
};

export default Sidebar;
