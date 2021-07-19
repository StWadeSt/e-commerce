import React, {useState} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button  } from '@material-ui/core';
import useStyles from './styles';

import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
    const [acticeStep, setActiveStep] = useState(1);
    const classes = useStyles();

    const Confirmation = () =>(
        <div>
            Confirmation
        </div>
    )

    const Form = () => acticeStep === 0 ? <AddressForm/> : <PaymentForm/>;

    return (
        <>
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center">Checkout</Typography>
                            <Stepper activeStep={acticeStep} className={classes.stepper}>
                                {steps.map((step) =>(
                                    <Step key={step}>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            {acticeStep===steps.length ? <Confirmation/> : <Form/>}
                    </Paper>
                </main>
            </div>
        </>
    )
}

export default Checkout
