import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
const Footer = () => {
    return (
        /* 
        ----------------
        Footer Component
        ---------------- 
        */
        <Box sx={{ flexGrow: 1, mt: 5, p: 3, backgroundColor: "black" }}>
            <Container sx={{ p: 5 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} s={12} md={4}>
                        <Typography variant="p" gutterBottom component="div">
                            <span className="text-light">Important Links</span>
                        </Typography>
                        <p><Link to="/about" className="text-decoration-none text-opacity-50 text-light">About Us</Link></p>
                        <p><Link to="/contact" className="text-decoration-none text-opacity-50 text-light">Contact</Link></p>
                        <p><Link className="text-decoration-none text-opacity-50 text-light" to="">Terms of use</Link></p>
                        <p><Link className="text-decoration-none text-opacity-50 text-light" to="">Accessibility</Link></p>
                        <p><Link className="text-decoration-none text-opacity-50 text-light" to="">Privacy and cookies</Link></p>
                    </Grid>
                    <Grid xs={12} s={12} md={4}>
                        <p className="text-light">Follow us</p>
                        <p><Link className="text-decoration-none text-opacity-50 text-light" to=""><i className="fab fa-facebook-square"></i> Facebook</Link></p>
                        <p><Link className="text-decoration-none text-opacity-50 text-light" to=""><i className="fab fa-twitter-square"></i> Twitter</Link></p>
                        <p className="text-light"><i className="fas fa-phone"></i> Phone</p>
                        <p className="text-opacity-50 text-light">+88 123-456-7890</p>
                        <p className="text-light"><i className="fas fa-map-marker-alt"></i> Address</p>
                        <p className="text-opacity-50 text-light">123 Anywhere,
                            <br />
                            Any City,
                            <br />
                            ST-12345
                        </p>
                    </Grid>
                    <Grid xs={12} s={12} md={4}>
                        <img className="img-fluid my-4" src="https://i.ibb.co/nbz8T79/Payment-gateways-1-removebg-preview.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
            <h6 className="text-center text-primary">
                2021 | Time<span className="text-danger">CO</span>
            </h6>
        </Box>
    );
};

export default Footer;