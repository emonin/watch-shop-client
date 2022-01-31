import React from 'react';
import { CircularProgress, Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Link,
    useLocation,
    useHistory
} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Card, Container } from '@mui/material';
/* import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'; */


const Register = () => {
    const { user, registerUser, isLoading, setIsLoading, signInWithGoogle, setError, error } = useAuth();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const [loginData, setLoginData] = React.useState({});
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    };
    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_url)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <Container>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <h1 className="fw-bold text-primary">Welcome</h1>
                <h4 className="fw-bold ">Register to Continue</h4>
            </Box>
            <Card sx={{ mt: 5, boxShadow: 10, borderRadius: 5, maxWidth: { xs: 'auto', sm: '80%', md: '70%', lg: '50%' }, display: 'block', mx: 'auto' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 4
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <p className="text-danger">{error}</p>

                    <Box noValidate sx={{ mt: 1 }}>
                        {
                            !isLoading
                            &&
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    onBlur={handleOnBlur}
                                    margin="normal"
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    autoFocus
                                />
                                <TextField
                                    onBlur={handleOnBlur}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                                <TextField
                                    onBlur={handleOnBlur}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, p: 2, fontWeight: "bold", boxShadow: 5 }}
                                >
                                    Register
                                </Button>
                            </form>
                        }
                        {isLoading && <CircularProgress sx={{ display: 'block', mx: 'auto' }} />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        <Link to="/login" variant="body2">
                            {"Already have an account? Login"}
                        </Link>
                    </Box>
                </Box>
            </Card>
            <p className="text-center mt-5">-- OR --</p>
            <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ my: 5, p: 1, fontWeight: "bold", boxShadow: 5, borderRadius: 10, maxWidth: { xs: 'auto', sm: '80%', md: '50%' }, display: 'block', mx: 'auto' }}
                onClick={handleGoogleLogin}>
                <img src="https://i.ibb.co/1n191Qh/google.png" alt="" className="me-2" /> Google Login
            </Button>
        </Container>
    );
};

export default Register;