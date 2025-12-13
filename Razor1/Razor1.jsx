import React, { useEffect, useRef } from "react";
import "./Razro1.css";

const Razor1 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_RqHGLMiPVwrSlh");
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="rzp-wrapper">
      <form id="rzp-button-container" ref={containerRef}></form>
    </div>
  );
};

export default Razor1;
