import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DoneIcon from '@mui/icons-material/Done';

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
const MakeAdmin = () => {
    const history = useHistory();
    const redirect_url = '/home';
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const handleClose = () => {
        setOpen(false);
        history.push(redirect_url)
    };
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://blooming-shelf-87253.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setOpen(true);
                }
            })

        e.preventDefault()
    }
    return (
        <Container sx={{ flexGrow: 1 }}>
            <React.Fragment>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography color="primary" id="modal-modal-title" variant="h6" sx={{ fontFamily: 'Kanit', my: 2, textAlign: 'center' }} component="h2">Made Admin successfully! . <DoneIcon />
                        </Typography>
                    </Box>
                </Modal>
            </React.Fragment>
            <h1 className="fw-bold mt-5 text-secondary">Make an Admin</h1>
            <Box sx={{ borderRadius: 5, backgroundColor: 'white', boxShadow: 5, p: 5, my: 5 }}>
                <form onSubmit={handleAdminSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={5}>
                            <img className='w-75 d-block mx-auto' src="https://i.ibb.co/BrfXZ8j/add-admin.png" alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={7}>
                            <input
                                placeholder="Email"
                                type="email"
                                onBlur={handleOnBlur}
                                className="mb-3 w-100 shadow-sm border rounded"
                            />
                            <input className="py-2 px-4 text-white bg-primary border rounded" type="submit" value="Make Admin" />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default MakeAdmin;