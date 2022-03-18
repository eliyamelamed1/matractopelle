import * as React from 'react';

import AgricultureIcon from '@mui/icons-material/Agriculture';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { pageRoutes } from '../utils/enum';
import { useRouter } from 'next/router';

const pages = ['accueil', 'location de pelleteuse', 'demande de devis'];

const Navbar = () => {
    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position='static' color='transparent' className='navbar'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link key={page} href={pageRoutes[page]} passHref>
                                        <a
                                            onClick={handleCloseNavMenu}
                                            style={{
                                                color: 'black',
                                                textTransform: 'capitalize',
                                            }}
                                            className={router.pathname === pageRoutes[page] ? 'active' : ''}
                                        >
                                            {page}
                                        </a>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                        <div
                            style={{
                                margin: 'auto',
                                display: 'flex',
                                gap: '0.5rem',
                                color: 'white',
                            }}
                        >
                            <AgricultureIcon />
                            Tractors.fr
                        </div>
                    </Box>

                    <Box
                        sx={{
                            alignItems: 'center',
                            flexGrow: 0.8,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.5rem',
                                color: 'white',
                            }}
                        >
                            <AgricultureIcon />
                            Tractors.fr
                        </div>

                        <div className='linkContainer'>
                            {pages.map((page) => (
                                <Link key={page} href={pageRoutes[page]} passHref>
                                    <a
                                        onClick={handleCloseNavMenu}
                                        className={router.pathname === pageRoutes[page] ? 'active' : ''}
                                    >
                                        {page}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: '45px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        ></Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
