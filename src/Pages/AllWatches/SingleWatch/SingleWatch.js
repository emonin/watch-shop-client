import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useHistory } from 'react-router';
import './SingleWatches.css'

const SingleWatch = (props) => {
    const history = useHistory();
    const handleDetailsButton = id => {
        history.push(`/watches/${id}`)
    }
    const { name, desc, img, price, _id } = props.watch;
    return (
        <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ height: '100%', p: 4, boxShadow: 4, borderRadius: 4 }} className="card-hover1">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <img className="w-100 mb-4 d-block mx-auto" src={img} alt="" />
                    </Box>
                    <Box>
                        <h5 className="text-primary">{name}</h5>
                        <p>{desc.slice(0, 150)} . . .</p>
                    </Box>
                </Box>
                <hr className='text-primary' />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <p className="text-danger">$ {price}</p>
                    </Box>
                    <Box>
                        <Button onClick={() => handleDetailsButton(_id)} variant="contained" sx={{ boxShadow: 5, borderRadius: 5 }}>Purchase
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
};

export default SingleWatch;