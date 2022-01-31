import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@mui/material/Card';
import { Rating } from '@mui/material';
import './ShowReviews.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ShowReviews = () => {
    const theme = useTheme();
    const [reviews, setReviews] = React.useState([]);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = reviews.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (review) => {
        setActiveStep(review);
    };
    
    useEffect(() => {
        fetch('https://blooming-shelf-87253.herokuapp.com/reviews/')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [reviews]);

    return (
        <Box sx={{ maxWidth: { xs: 'auto', sm: '80%', md: '60%' }, flexGrow: 1, boxShadow: 1, display: 'block', mx: 'auto' }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {reviews.map((review, index) => (
                    <Card sx={{ px: 5, pt: 4, backgroundColor: 'white', height: '100%', }} key={review._id}>
                        <Box>
                            <img sx={{ width: 56, height: 56, }} id="imgDiv" src={review.img} alt="" />
                            <h6 style={{ display: 'flex', justifyContent: 'center', marginTop: 3 }} className="text-primary">{review.fullname}</h6>
                            <Rating sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }} name="half-rating-read" defaultValue={review.value} precision={0.5} readOnly />
                            <p className='border-top pt-2'>{review.comment.slice(0, 200)} . . .</p>
                        </Box>
                    </Card>
                ))}
            </AutoPlaySwipeableViews>
            {<MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                    </Button>
                }
            />}
        </Box>
    );
};

export default ShowReviews;