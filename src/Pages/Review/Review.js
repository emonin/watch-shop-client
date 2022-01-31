import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAuth from '../../hooks/useAuth';
import Rating from '@mui/material/Rating';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

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
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const Review = () => {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const redirect_url = '/home';
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        history.push(redirect_url)
    };
    const { user } = useAuth();
    console.log(user)
    const handleShow = () => setOpen(true);
    const onSubmit = data => {
        data.img = user.photoURL;
        data.value = value;
        fetch("https://blooming-shelf-87253.herokuapp.com/review",
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    };
    return (
        <Container sx={{ flexGrow: 1 }}>
            <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography color="primary" id="modal-modal-title" variant="h6" sx={{ fontFamily: 'Kanit', my: 2, textAlign: 'center' }} component="h2">
                        Thank You,for your feedback! . <FeedbackOutlinedIcon />
                    </Typography>
                </Box>
            </Modal>
        </React.Fragment>
            <h1 className="fw-bold mt-5 text-secondary">Customer Review</h1>
            <Box sx={{ borderRadius: 5, backgroundColor: 'white', boxShadow: 5, p: 5, my: 5 }}>
                <Box className="p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={6}>
                                <img className='w-75' src="https://i.ibb.co/2YtP7db/review.png" alt="" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <input {...register("fullname")}
                                    value={user.displayName}
                                    className="p-2 mb-3 w-100 shadow-sm border rounded"
                                />
                                <input {...register("comment", { required: true })}
                                    placeholder="Comment"
                                    className="py-5 px-2 mb-3 w-100 shadow-sm border rounded"
                                />
                                <Box
                                    sx={{
                                        width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                    />
                                    {value !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )}
                                </Box>
                                {errors.exampleRequired && <span>This field is required</span>}
                                <input onClick={handleShow} className="py-2 px-4 text-white bg-primary border rounded" type="submit" value="Review" />
                            </Grid>

                        </Grid>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default Review;