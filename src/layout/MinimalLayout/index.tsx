import { Outlet } from 'react-router-dom';
import React from "react";
import Header from '../../components/Header';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Outlet />
    </>
);

export default MinimalLayout;
