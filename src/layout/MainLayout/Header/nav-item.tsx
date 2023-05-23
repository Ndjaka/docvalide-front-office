import React from 'react';
import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import menus from "./data";


const NavItem = () => <Box sx={{display: 'flex'}}>
    {
        menus.map(menu => {
            return (<Link
                key={`${menu.href}_${menu.menu}`}
                to={menu.href}
                style={{textDecoration: 'none'}}>
                <Typography
                    color={"text.secondary"}
                    variant={'button'}
                    component={'div'}
                    sx={{
                        cursor: 'pointer',
                        mr: '17px',
                        mt: '9px'
                    }}
                >
                    {menu.menu}
                </Typography>
            </Link>)
        })
    }
</Box>


export default NavItem;