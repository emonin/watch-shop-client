import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Watch from '../Watch/Watch';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Watches = () => {

    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://blooming-shelf-87253.herokuapp.com/home/')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <h1 className="fw-bold mb-5 text-secondary">Watches</h1>
                </Box>
                <Box>
                    <Link style={{ textDecoration: 'none' }} to="/allwatches"><Button variant="outlined" style={{ color: '#6c757d' }} sx={{ boxShadow: 2, borderRadius: 5, backgroundColor: 'white' }}>More Watches</Button></Link>
                </Box>
            </Box>
            <Grid container spacing={5}>
                {
                    watches.map(watch => <Watch
                        key={watch._id}
                        watch={watch}
                    />)
                }
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                <Link style={{ textDecoration: 'none' }} to="/allwatches"><Button variant="contained" sx={{ px: 4, backgroundColor: 'white', fontWeight: 'bold', color: 'black' }}>Show More</Button></Link>
            </Box>
        </Box>
    );
};

export default Watches;