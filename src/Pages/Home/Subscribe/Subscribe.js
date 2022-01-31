import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Subscribe = () => {
    return (
        <Grid container spacing={2} className='mt-5'>
            <Grid item xs={12} sm={12} md={6}>
                <h5 className="mb-5 text-secondary">SUBSCRIBE TO OUR <span className='fw-bold text-primary'>VIP</span> EXCLUSIVE DEALS</h5>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Stack direction="row" spacing={1}>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField className="bg-white" fullWidth label="email address" id="fullWidth" />
                    </Box>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>

            </Grid>
        </Grid>
    );
};

export default Subscribe;