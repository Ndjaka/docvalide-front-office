import {Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../../components/Header";

function MainLayout() {
    return (
        <Box >
            <Header/>
            <Box  component={"main"}>
             <Outlet/>
            </Box>
        </Box>
    );
}

export default MainLayout;

