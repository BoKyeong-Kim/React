import React, { useState, useEffect } from 'react';
import { Paper, StepLabel, Typography, Stepper, Step } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import useStyle from './styles';
import AddressForm from '../AddressForm';

const steps = ['Shipping address', 'Payment datails'];

const Checkout = ({ cart, order, onCaptureCheckout }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});

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
    }

    const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next}/>
    : 'payment'

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
                    {activeStep === steps.length ? 'test' : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;