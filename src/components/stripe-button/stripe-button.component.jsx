import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  //stripe needs that value in cents
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HCNC0J9NI2gRWMXHfxpEgW0cbo8MSapGZKpjqQzfejSRhPEDuLQNMckXk937b5N4UcJrQ60mcTky2QK72t40zJc00fO0xqAWM';

  const onToken = (token) => {
    //with token you make the call to backend to process the payment
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
