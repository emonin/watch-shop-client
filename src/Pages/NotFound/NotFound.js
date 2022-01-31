import React from 'react';
import { Box } from '@mui/material';

const NotFound = () => {
    return (
        /* 
        --------------
        404 Error Page
        -------------- 
        */
        <Box className="text-center my-5">
            <img className="img-fluid w-75 border rounded" src="https://i.ibb.co/BwNbgt4/error404.gif" alt="" />
        </Box>
    );
};

export default NotFound;