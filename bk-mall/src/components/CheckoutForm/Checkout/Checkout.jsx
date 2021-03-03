import React, { useState, useEffect } from 'react';
import { Paper, StepLabel, Typography, Stepper, Step, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import useStyle from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment datails'];

const Checkout = ({ cart, order, onCaptureCheckout }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const classes = useStyle();


    useEffect(() => {
        const generateToken = async () => {
                const token = await commerce.checkout.generateToken(cart.id, { type : 'cart'});

                setCheckoutToken(token);

        }
        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    
    const next = (data) => {
        setShippingData(data);

        nextStep();
    };


    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant='h5'>Thank you for your purchase, {order.customer.firstname}, {order.customer.lastname} </Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle2'>Order ref : {order.customer_reference}</Typography>
            </div>
            <br/>
            <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
        </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant='h5'>Thank you for your purchase </Typography>
                <Divider className={classes.divider}/>
            </div>
            <br/>
            <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
        </>
    ) :(
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
    );


    const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next}/>
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} />


    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;