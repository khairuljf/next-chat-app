// src/Layout.js
import React from 'react';
import {Box} from "@mui/material";
import Sidebar from "@/app/components/Sidebar";
import {appWrapStyle} from "@/app/AppStyle";


const Layout = ({children}) => {
    return (
        <>
           <Box className='App' sx={appWrapStyle}>
               <Sidebar/>
               <Box component="main" sx={{flex: 1}} className='main-content-wrap'>
                   {children}
               </Box>
           </Box>
        </>
    );
};

export default Layout;
