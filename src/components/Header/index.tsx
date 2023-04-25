import React from 'react';
import {AppBar, Avatar, Box, Button, Container, Hidden, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from "./navigation";
import Logo from "./logo";
import NavItem from "./nav-item";
import {deepOrange} from "@mui/material/colors";




function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <>
            <Navigation mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
            <AppBar component={"nav"} sx={{
                height: 76,
                width: '100%',
            }} variant={'outlined'}>
                <Toolbar>
                    <Container maxWidth={'lg'}>
                        <Box sx={{
                            mt: '20px',
                            display: 'flex',
                            justifyContent: {
                                xs: 'normal',
                                sm: 'normal',
                                md: 'space-between',
                                lg: 'space-between'
                            }
                        }}>
                            <Hidden mdUp>
                                <IconButton
                                    onClick={handleDrawerToggle}
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    sx={{mt: -1}}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </Hidden>
                            <Logo/>
                            <Hidden mdDown>
                                <Box sx={{display: 'flex'}}>
                                    <NavItem/>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    placeContent: 'center'
                                }}>
                                    <Avatar sx={{
                                        bgcolor: 'secondary.main',
                                        color: "primary.main",
                                        height: "36px",
                                        width: "36px",
                                        fontSize: "small"
                                    }}>NE</Avatar>
                                </Box>
                            </Hidden>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;