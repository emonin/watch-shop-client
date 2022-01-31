import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = React.useState([]);
    
    useEffect(() => {
        fetch('https://blooming-shelf-87253.herokuapp.com/all-orders/')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <Container>
            <h1 className="fw-bold mt-5 text-secondary">Manage All Orders</h1>
            <Box sx={{ my: 5 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: 'lightblue', fontWeight: 'bold' }}>
                                <TableCell sx={{ fontWeight: 'bold' }}>Product Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allOrders.map((singleOrder) => (
                                <TableRow
                                    key={singleOrder._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {singleOrder.productName}
                                    </TableCell>
                                    <TableCell>{singleOrder.email}</TableCell>
                                    <TableCell>{singleOrder.price}</TableCell>
                                    <TableCell>{singleOrder.status}</TableCell>
                                    <TableCell><Button sx={{ mr: 1 }} variant="contained"><UpgradeIcon />Update</Button><Button variant="contained" color="error"><ClearIcon /></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default ManageAllOrders;