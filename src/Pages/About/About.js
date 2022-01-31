import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import Button from '@mui/material/Button';

const About = () => {
    return (
        <Container>
            <h1 className="fw-bold mt-5 text-secondary">About</h1>
            <Box sx={{ borderRadius: 5, backgroundColor: 'white', boxShadow: 5, p: 5, my: 5 }}>
                <h3 className="text-primary fw-bold">TIME<span className="text-danger">CO</span></h3>
                <hr />
                <p><span className="text-primary fw-bold">Time<span className="text-danger">CO</span></span> is a very reputed and popular name for world class watches and writing instruments in Bangladesh. There are 52 <span className="text-primary fw-bold">Time<span className="text-danger">CO</span></span> strategically located at the entrances of key shopping malls and 5-star hotels. <span className="text-primary fw-bold">Time<span className="text-danger">CO</span></span> maintains an international standard interior, with uniform looking point of sales with an elegant outlook and ambience. It is operated by trained sales & customer care officers.<span className="text-primary fw-bold"><span className="text-primary fw-bold">Time<span className="text-danger">CO</span></span></span> offers the finest selection of genuine watches of internationally renowned brands with international guarantee cards.<span className="text-primary fw-bold">Time<span className="text-danger">CO</span></span> is the only point of sale for distribution of authentic and genuine watch, along with after sales service.</p>
                <h3 className='fw-bold text-secondary mt-5'>AFTER SALES SERVICE</h3>
                <hr />
                <p>We have a wide range of customer service base for ensuring smooth customer support and service. We never compromise with the quality of service. We believe that delivering high quality products without high quality service worths nothing but customer dissatisfaction. So, we ensure high quality products with high quality service all the way.</p>
                <Stack spacing={2} direction="row">
                    <Button size='small' variant="contained">Click Here</Button><p>to visit <span className="text-primary fw-bold">Time<span className="text-danger">CO</span></span> Customer Service</p>
                </Stack>

            </Box>
        </Container>
    );
};

export default About;