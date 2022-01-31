import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Box, Container, Button } from '@mui/material';
import MyOrder from '../MyOrder/MyOrder';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import useAuth from '../../hooks/useAuth';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    p: 4,
};

const MyOrders = () => {
    const history = useHistory();
    const redirect_url = '/home';
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const { user } = useAuth();
    const [control, setControl] = useState(false)
    const email = user.email;
    const url = `https://blooming-shelf-87253.herokuapp.com/orders/${email}`;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDeleteConfirm = () => {
        history.push(redirect_url);
    };
    const handleDelete = (id) => {
        setOpen(true);
        fetch(`https://blooming-shelf-87253.herokuapp.com/delete-order/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            })
    };
    return (
        <Container>
            <React.Fragment>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography color="primary" id="modal-modal-title" variant="h6" sx={{ fontFamily: 'Kanit', my: 2, textAlign: 'center' }} component="h2">
                            Are you sure you want to delete?
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <Button variant="outlined" color="primary" sx={{ fontFamily: 'Kanit', mr: 1, }} onClick={handleClose}><CloseOutlinedIcon /></Button>
                            <Button variant="outlined" color="error" sx={{ fontFamily: 'Kanit', }} onClick={handleDeleteConfirm}><DeleteOutlineOutlinedIcon /></Button>
                        </Box>
                    </Box>
                </Modal>
            </React.Fragment>
            <h1 className="fw-bold mt-5 text-secondary">My Orders</h1>
            <Box sx={{ borderRadius: 5, backgroundColor: 'white', boxShadow: 5, p: 5, my: 5 }}>
                {
                    orders.length === 0
                        ?
                        <p className="text-center text-danger">You have no order right Now!</p>
                        :
                        <Box>
                            {
                                orders.length === 1
                                    ?
                                    <h5 className="mb-3 text-secondary">Purchase : <span className="text-primary fw-bold">{orders.length}</span> Watch</h5>
                                    :
                                    <h5 className="mb-3 text-secondary">Purchase : <span className="text-primary fw-bold">{orders.length}</span> Watches</h5>
                            }
                            <Grid container spacing={0}>
                                {
                                    orders.map(order => <MyOrder
                                        key={order._id}
                                        order={order}
                                        handleDelete={handleDelete}
                                    />)
                                }
                            </Grid>
                        </Box>
                }
            </Box>
        </Container>
    );
};

export default MyOrders;