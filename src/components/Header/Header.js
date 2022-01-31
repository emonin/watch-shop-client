import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import './Header.css';

const Header = () => {
    const { user, admin, logOut } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        /* 
        ---------------------------
        Header Component and Navbar
        --------------------------- 
        */
        <React.Fragment>
            <AppBar position="sticky" className="header-bg">
                <Container maxWidth="xl" sx={{ p: 1 }}>
                    <Toolbar disableGutters>
                        <Box
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img src="https://i.ibb.co/vkPnW3c/timeco.png" alt="TimeCO Logo" />
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
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
                                    backgroundColor: '',
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Link style={{ textDecoration: 'none' }} to="/home">
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                            Home
                                        </Typography>
                                    </MenuItem>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to="/allwatches">
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                            Watches
                                        </Typography>
                                    </MenuItem>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to="/about">
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                            About
                                        </Typography>
                                    </MenuItem>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to="/contact">
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                            Contact
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </Box>
                        <Box
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src="https://i.ibb.co/vkPnW3c/timeco.png" alt="TimeCO Logo" />
                        </Box>
                        <Box style={{ marginLeft: 30 }} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', } }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, fontFamily: 'Kanit', display: 'block' }}
                            >
                                <Link className='hover-line text-color' style={{ textDecoration: 'none' }} to="/home">Home</Link>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, fontFamily: 'Kanit', display: 'block' }}
                            >
                                <Link className='hover-line text-color' style={{ textDecoration: 'none' }} to="/allwatches">Watches</Link>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, fontFamily: 'Kanit', display: 'block' }}
                            >
                                <Link className='hover-line text-color' style={{ textDecoration: 'none' }} to="/about">About</Link>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, fontFamily: 'Kanit', display: 'block' }}
                            >
                                <Link className='hover-line text-color' style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
                            </Button>
                        </Box>
                        <Box>
                            {
                                user.email || admin.email
                                    ?
                                    <Box sx={{ flexGrow: 0 }}>
                                        <Tooltip title="Open Dashboard">
                                            <Button variant="contained" size="small" color="info" onClick={handleOpenUserMenu} sx={{ fontFamily: 'Kanit' }}><DashboardRoundedIcon />
                                            </Button>
                                        </Tooltip>
                                        {
                                            admin === true
                                                ?
                                                <Menu
                                                    sx={{ mt: '45px', }}
                                                    id="menu-appbar"
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
                                                >
                                                    <Typography sx={{ fontFamily: 'Kanit', color: 'green', px: 2, mb: 1 }} textAlign="center">
                                                        <PersonOutlinedIcon /> {user.displayName}
                                                    </Typography>
                                                    <MenuItem onClick={handleCloseNavMenu}>
                                                        <Typography sx={{ fontFamily: 'Kanit', }} textAlign="center">
                                                            <Link style={{ textDecoration: 'none' }} to="/manage-orders">Manage All Orders</Link>
                                                        </Typography>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseNavMenu}>
                                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                                            <Link style={{ textDecoration: 'none' }} to="/add-product">Add A Product</Link>
                                                        </Typography>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseNavMenu}>
                                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                                            <Link style={{ textDecoration: 'none' }} to="/manage-products">Manage Products</Link>
                                                        </Typography>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseNavMenu}>
                                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                                            <Link style={{ textDecoration: 'none' }} to="/make-admin">Make Admin</Link>
                                                        </Typography>
                                                    </MenuItem>
                                                    <Button onClick={logOut} sx={{ alignItems: 'center' }} className="d-block mx-auto fw-bold mt-2" variant="outlined" color="error">Logout</Button>
                                                </Menu>
                                                :
                                                <Menu
                                                    sx={{ mt: '45px', }}
                                                    id="menu-appbar"
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
                                                >
                                                    <Typography sx={{ fontFamily: 'Kanit', color: 'green', px: 2, mb: 1 }} textAlign="center">
                                                        <PersonOutlinedIcon /> {user.displayName}
                                                    </Typography>
                                                    <MenuItem onClick={handleCloseNavMenu}>
                                                        <Typography sx={{ fontFamily: 'Kanit', }} textAlign="center">
                                                            <Link style={{ textDecoration: 'none' }} to="/payment">Payment</Link>
                                                        </Typography>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseNavMenu}>
                                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                                            <Link style={{ textDecoration: 'none' }} to="/myorders">My Orders</Link>
                                                        </Typography>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseNavMenu}>
                                                        <Typography sx={{ fontFamily: 'Kanit' }} textAlign="center">
                                                            <Link style={{ textDecoration: 'none' }} to="/review">Review</Link>
                                                        </Typography>
                                                    </MenuItem>
                                                    <Button onClick={logOut} sx={{ textAlign: 'center' }} className="d-block mx-auto fw-bold my-2" variant="outlined" color="error">Logout</Button>
                                                </Menu>
                                        }
                                    </Box>
                                    :
                                    <Box>
                                        <Tooltip title="Login">
                                            <Link style={{ textDecoration: 'none' }} to="/login">
                                                <Button variant="contained" size="small" color="info" sx={{ fontFamily: 'Kanit' }}>
                                                    Login
                                                </Button>
                                            </Link>
                                        </Tooltip>
                                        <Tooltip title="Register">
                                            <Link style={{ textDecoration: 'none' }} to="/register">
                                                <Button variant="outlined" size="small" sx={{ fontFamily: 'Kanit', color: 'white', marginLeft: 1, boxShadow: 1 }}>
                                                    Register
                                                </Button>
                                            </Link>
                                        </Tooltip>
                                    </Box>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment >
    );
};

export default Header;