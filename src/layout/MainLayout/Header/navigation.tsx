import React from 'react';
import Drawer from '@mui/material/Drawer';
import {
    Box,
    Button,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import Logo from "./logo";
import menus from "./data";
import {Link} from "react-router-dom";
import language from "../../assets/language.svg"
import palette from "../../../theme/palette";

interface navigationProps {
    mobileOpen: boolean,
    handleDrawerToggle: () => void
}

function Navigation(props: navigationProps) {
    const {mobileOpen, handleDrawerToggle} = props;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                px: '9px'
            }}>
                <Logo/>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{mt: -1}}
                >
                    <img src={language}
                           alt={'Image of earth'}
                           height={20}
                           width={20}
                           style={{marginTop: '11px', cursor: 'pointer'}}
                    />
                </IconButton>
            </Box>
            <Divider/>
            <List>
                {menus.map((item) => (
                    <ListItem key={item.menu} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={<Link
                                to={item.href}
                                style={{textDecoration: 'none'}}>
                                <Typography
                                    color={"text.secondary"}
                                    variant={'button'}
                                    component={'div'}
                                    sx={{cursor: 'pointer'}}
                                >
                                    {item.menu}
                                </Typography>
                            </Link>}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button
                sx={{
                    mr: '12px',
                    backgroundColor: palette.secondary?.main,
                    color: palette.primary?.main
                }}
                variant={'text'}
                color={'secondary'}>Connexion</Button>

        </Box>
    );

    return (
        <Box component="nav">
            <Drawer
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', sm: 'block'},
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 240,
                        backgroundColor: palette.primary?.main,
                        color: palette.text?.secondary
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

export default Navigation;