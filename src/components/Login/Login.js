import React from 'react';
import { CircularProgress, Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Link,
    useLocation,
    useHistory
} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Card, Container } from '@mui/material';


const Login = () => {
    const [loginData, setLoginData] = React.useState({});
    const { signInWithGoogle, setError, error, setIsLoading, loginUser, user, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
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
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <h1 className="fw-bold text-primary">Welcome Back</h1>
                <h4 className="fw-bold ">Login to Continue</h4>
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
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={handleOnChange}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={handleOnChange}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, p: 2, fontWeight: "bold", boxShadow: 5 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register" variant="body2">
                                    {"Don't have an account? Register"}
                                </Link>
                            </Grid>
                        </Grid>
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

export default Login;