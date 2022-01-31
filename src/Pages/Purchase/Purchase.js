import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAuth from '../../hooks/useAuth';
import DoneIcon from '@mui/icons-material/Done';
import './Purchase.css'

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

const Purchase = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const redirect_url = '/myorders';
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        history.push(redirect_url)
    };
    const { user } = useAuth();
    const id = useParams()
    const getId = id.id;
    const url = `https://blooming-shelf-87253.herokuapp.com/watches/${getId}`;
    const [singleWatch, setSingleWatch] = useState({});
    const { name, desc, img, price } = singleWatch;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleWatch(data))
    }, []);

    const handleShow = () => setOpen(true);
    const onSubmit = data => {
        data.price = price;
        data.productName = name;
        data.img = img;
        data.status = "Pending";
        fetch("https://blooming-shelf-87253.herokuapp.com/purchase",
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    };
    return (
        <Container>
            <React.Fragment>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography color="primary" id="modal-modal-title" variant="h6" sx={{ fontFamily: 'Kanit', my: 2, textAlign: 'center' }} component="h2">
                            You're Order confirmed. <DoneIcon />
                        </Typography>
                    </Box>
                </Modal>
            </React.Fragment>
            <Box>
                <h1 className="fw-bold mt-5 text-secondary">Product Details</h1>
            </Box>
            <Box sx={{ flexGrow: 1, borderRadius: 5, backgroundColor: 'white', boxShadow: 5, p: 5, my: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <img className="w-75 mb-4 d-block mx-auto border" src={img} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <h3 className="fw-bold" style={{ color: "darkblue" }}>{name}</h3>
                        <hr />
                        <p>{desc}</p>
                        <h5 style={{ color: "#7e00b4" }} className="fw-bold"><span className="fs-6 text-secondary">Price: </span>${price} Only</h5>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ boxShadow: 5, backgroundColor: 'white' }}>
                <Box className="px-3 py-4" sx={{ backgroundColor: '#008bdf' }}>
                    <h2 className="fw-bold text-light">Product Order Form</h2>
                </Box>
                <Box className="p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <input {...register("fullname")}
                                    value={user.displayName}
                                    className="p-2 mb-3 w-100 shadow-sm border rounded"
                                />
                                <input {...register("email")}
                                    value={user.email}
                                    className="p-2 mb-3 w-100 shadow-sm border rounded"
                                />
                                <input {...register("address", { required: true })}
                                    placeholder="Address*"
                                    className="py-4 px-2 mb-3 w-100 shadow-sm border rounded"
                                />
                                <input {...register("date", { required: true })}
                                    type="date"
                                    className="p-2 mb-3 w-100 shadow-sm border rounded"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Box className="border">
                                    <table>
                                        <tr>
                                            <th colspan="2" className="fw-bold fs-4 text-secondary text-decoration-underline">Your Product</th>
                                        </tr>
                                        <tr>
                                            <td>Watch Name :</td>
                                            <td className="fw-bold fs-5 text-primary">{name}</td>
                                        </tr>
                                        <tr>
                                            <td>Watch Price : </td>
                                            <td className="fw-bold fs-6 text-danger">
                                                $ {price}</td>
                                        </tr>
                                    </table><br />
                                    <Box>
                                        <input type="radio" name="group" value="dbt" checked /> Direct Bank Transfer
                                    </Box>
                                    <p>
                                        Make your payment directly into our bank account.Please use your Order ID as the payment reference.
                                    </p>
                                    <Box className="mb-3">
                                        <input type="radio" name="group" /> Card : <span>
                                            <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" />
                                        </span>
                                    </Box>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input onClick={handleShow} className="p-2 text-white bg-primary border rounded" type="submit" value="Place Order" />
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default Purchase;