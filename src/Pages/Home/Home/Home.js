import React from 'react';
import { Container } from '@mui/material';
import Banner from '../Banner/Banner';
import Benefit from '../Benefit/Benefit';
import Watches from '../Watches/Watches';
import Subscribe from '../Subscribe/Subscribe';
import WatchStyle from '../WatchStyle/WatchStyle';
import ShowReviews from '../ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Container>
                <Benefit />
                <WatchStyle />
            </Container>
            <Container>
                <Watches />
                <h1 className="fw-bold mb-5 text-secondary">Customer's Feedback</h1>
                <ShowReviews />
                <Subscribe />
            </Container>
        </div>
    );
};

export default Home;