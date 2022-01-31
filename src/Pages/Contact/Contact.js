import React from 'react';
import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    return (
        <Container>
            <h1 className="fw-bold mt-5 text-secondary">Contact</h1>
            <Box sx={{ my: 5 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ borderRadius: 5, backgroundColor: 'white', boxShadow: 5, p: 5, height: '100%' }}>
                            <h3 className="text-primary fw-bold">HEAD OFFICE</h3>
                            <hr />
                            <h5 className='text-info'>{<LocationOnOutlinedIcon />} Address :</h5>
                            <p>123 Anywhere,<br />
                                Any City,<br />
                                ST-12345
                            </p>
                            <h5 className='text-info'>{<LocalPhoneOutlinedIcon />} Mobile :</h5>
                            <p>+88 123-456-7890</p>
                            <h5 className='text-info'>{<AlternateEmailIcon />} Email :</h5>
                            <p>hello@timeco.com</p>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ borderRadius: 5, backgroundColor: 'white', boxShadow: 5, p: 5, height: '100%' }}>
                            <h3 className="text-primary fw-bold">GET IN TOUCH</h3>
                            <hr />
                            <TextField fullWidth size="small" label="Name" id="fullWidth" color="primary" className='mt-3' />
                            <TextField fullWidth size="small" label="Email" id="fullWidth" color="primary" className='mt-3' />
                            <TextField fullWidth size="small" label="Phone" id="fullWidth" color="primary" className='mt-3' />
                            <TextareaAutosize
                                className='my-3'
                                color="primary"
                                aria-label="Message"
                                id="fullWidth"
                                placeholder="  Message"
                                minRows={3}
                                style={{ width: '100%' }}
                            />
                            <Button sx={{ display: 'flex', alignItems: 'end' }} variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Contact;