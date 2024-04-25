"use client";
import { useContext, useEffect } from "react";
import UserContext from "@/store/user-context";
import { PaymentElement, useStripe } from "@stripe/react-stripe-js";
import { redirect } from "next/navigation";

import stripe from "stripe";
const CheckoutForm = () => {
  const stripe = useStripe();
  const { user } = useContext(UserContext);

  // const elements = useElements();
  // const stripe = useStripe();
  // const handleSubmit = async (event) => {
  //   event.prventDefault();
  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   const result = await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       return_url: "http://localhost:3000",
  //     },
  //   });

  //   if (result.error) {
  //     // Show error to your customer (for example, payment details incomplete)
  //     console.log(result.error.message);
  //   } else {
  //     // Your customer will be redirected to your `return_url`. For some payment
  //     // methods like iDEAL, your customer will be redirected to an intermediate
  //     // site first to authorize the payment, then redirected to the `return_url`.
  //   }
  // };
  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, []);
  return (
    <form
    // onSubmit={handleSubmit}
    >
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
