"use client";
import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  .then((stripe) => console.log(stripe))
  .catch((error) => console.log(error));

const CheckoutPage = () => {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 10,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutPage;
