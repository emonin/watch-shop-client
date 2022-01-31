import React from 'react';
import { Button, Grid } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const MyOrder = (props) => {
    const { email, price, productName, address, _id, img } = props.order;
    const handleDelete = props.handleDelete;
    return (
        <Grid item xs={12} sm={12} md={12}>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <img className="w-50 img-fluid d-block mx-auto" src={img} alt="" />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <h6 className="fw-bold" style={{ color: "darkblue" }}>{productName}</h6>
                    <p><span style={{ color: "#7e00b4" }}><EmailOutlinedIcon /></span> {email}</p>
                    <p><span style={{ color: "#7e00b4" }}><FmdGoodOutlinedIcon /></span> {address}</p>
                    <p style={{ color: "#7e00b4" }}><span className="text-secondary">Price: </span>${price}</p>
                    <Button variant="outlined" color="error" onClick={() => handleDelete(_id)}><DeleteForeverIcon color="error" /></Button>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default MyOrder;