import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./splitCard.css";
import { Link } from "react-router-dom";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitForm = ({ processPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", paymentMethod);

    if (error) {
      console.log(error);
      setPaymentError(error.message);
      setSuccess(null);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setSuccess(paymentMethod);
      processPayment(paymentMethod.id);
      setPaymentError(null);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        className="mt-5 p-5"
        style={{ backgroundColor: "lightsteelblue" }}
        onSubmit={handleSubmit}
      >
        <h1> Payment Method</h1>
        <label>
          Card number
          <CardNumberElement options={options} />
        </label>
        <br />
        <label>
          Expiration date
          <CardExpiryElement options={options} />
        </label>
        <br />
        <label>
          CVC
          <CardCvcElement className="login-input" options={options} />
        </label>
        <br />
        <button className="btn gym-brand-btn" type="submit" disabled={!stripe}>
          Pay
        </button>{" "}
        <br />
        {paymentError && (
          <p style={{ color: "red" }} className="mt-5">
            {paymentError}{" "}
          </p>
        )}
        {success && (
          <p style={{ color: "green" }} className="mt-5">
            your payment process has been done successfully
          </p>
        )}
      </form>
    </div>
  );
};

export default SplitForm;
