import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SingleWatch from '../SingleWatch/SingleWatch'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AllWatches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://blooming-shelf-87253.herokuapp.com/watches/')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1 }}>
            <h1 className="fw-bold my-5 text-secondary">All Watches</h1>
            {
                watches.length === 0
                    ?
                    <Box style={{ alignItems: 'center' }}>
                        <CircularProgress class="d-block mx-auto" />
                    </Box>
                    :
                    <Grid container spacing={5}>
                        {
                            watches.map(watch => <SingleWatch
                                key={watch._id}
                                watch={watch}
                            />)
                        }
                    </Grid>
            }
            <Stack sx={{ mt: 5, alignItems: 'center' }} spacing={3}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>

        </Container>
    );
};

export default AllWatches;