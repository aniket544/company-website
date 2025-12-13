

import React, { useEffect, useRef } from 'react';

const RazorpayButton = ({
  paymentButtonId = "pl_RoFs63A2dWltZi",  // Your live button ID
  className = "",
  onSuccess,   // Called when payment is successful
  onError,     // Optional: on load error
  onLoad       // Optional: when button loads
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', paymentButtonId);
    script.async = true;

    script.onload = () => {
      console.log('Razorpay button loaded!');
      if (onLoad) onLoad();
    };

    script.onerror = () => {
      console.error('Failed to load Razorpay script');
      if (onError) onError();
    };

    // Razorpay posts message on payment success
    const handlePaymentSuccess = (event) => {
      // Security: Only accept messages from Razorpay
      if (event.origin !== 'https://checkout.razorpay.com') return;

      const data = event.data;
      if (data && data.event === 'payment.success') {
        const payment = data.payload.payment.entity;
        console.log('Payment Successful!', payment);

        // Trigger success callback with full payment data
        if (onSuccess) {
          onSuccess(payment);
        }
      }
    };

    // Listen for Razorpay postMessage events
    window.addEventListener('message', handlePaymentSuccess);

    // Inject script inside form
    const form = document.createElement('form');
    form.appendChild(script);
    containerRef.current.appendChild(form);

    // Cleanup
    return () => {
      window.removeEventListener('message', handlePaymentSuccess);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [paymentButtonId, onSuccess, onLoad, onError]);

  return (
    <div
      ref={containerRef}
      className={`razorpay-button-wrapper ${className}`}
      style={{
        width: '100%',
        minHeight: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
    />
  );
};

export default RazorpayButton;