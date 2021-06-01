import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitForm from './SplitCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Iu0RzDVuG4dQji9ReyfG4EDP7X25Gcle68AKSOjVj8KHr9z4sxuNS4vbQ5I8X0745t34rNaiFaRz4faPlSm5oT500LkCQckJe');

const Payment = ({processPayment}) => {
    return (
        <Elements stripe={stripePromise}>
          
        <SplitForm processPayment={processPayment}  />
      </Elements>
    );
};

export default Payment;