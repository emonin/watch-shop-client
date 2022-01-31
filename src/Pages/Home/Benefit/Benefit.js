import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


const Benefit = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ boxShadow: 5, height: '100%', p: 3, display: "flex", alignItems: "center" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={4}>
                                <img className="w-75" src="https://i.ibb.co/mRmHYKg/Financing.png" alt="" />
                            </Grid>
                            <Grid item xs={12} sm={8} md={8}>
                                <h3 className="fw-bold">0% Financing Available</h3>
                                <p>0% financing for up to 12 months on watches under $15,000.</p>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ boxShadow: 5, height: '100%', p: 3, display: "flex", alignItems: "center" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={4}>
                                <img className="w-75" src="https://i.ibb.co/nMFgnqM/tag.png" alt="" />
                            </Grid>
                            <Grid item xs={12} sm={8} md={8}>
                                <h3 className="fw-bold">Sell Your Watch & Part Exchange</h3>
                                <p>We offer part exchange for your watch against any of the watches on our site.  If you want to sell your watch, we can help with that too.</p>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ boxShadow: 5, height: '100%', p: 3, display: "flex", alignItems: "center" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={4}>
                                <img className="w-75" src="https://i.ibb.co/XtmRsLG/valuation.png" alt="" />
                            </Grid>
                            <Grid item xs={12} sm={8} md={8}>
                                <h3 className="fw-bold">Free Watch Valuations</h3>
                                <p>Entrust us to carry out a professional watch valuation, whether you want to insure your watch or trade it in.</p>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ boxShadow: 5, height: '100%', p: 3, display: "flex", alignItems: "center" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={4}>
                                <img className="w-75" src="https://i.ibb.co/X2r9mwQ/certificate.png" alt="" />
                            </Grid>
                            <Grid item xs={12} sm={8} md={8}>
                                <h3 className="fw-bold">Warranty</h3>
                                <p>Every pre-owned watch we sell is backed by a 12-month Global Watches warranty or the manufacturer's warranty, whichever is greater.</p>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Benefit;