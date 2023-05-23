import React from 'react';
import {useMediaQuery, useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Logo() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Link to={'/'}>
            <img
                src={logo}
                alt={'Logo of doc valide'}
                height={41}
                width={matches ? 189 : 112}
                style={{cursor: 'pointer'}}
            />
        </Link>
    );
}

export default Logo;