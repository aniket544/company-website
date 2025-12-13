import React, { useEffect } from "react";
import "./Razor2.css";

const Razor2 = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_RqDri9FQCePv0E");
    script.async = true;

    const form = document.getElementById("razorpay-form");
    if (form) form.appendChild(script);

    return () => {
      if (form) form.innerHTML = ""; // cleanup on unmount
    };
  }, []);

  return (
    <div className="razorpay-wrapper">
      <form id="razorpay-form"></form>
    </div>
  );
};

export default Razor2;
