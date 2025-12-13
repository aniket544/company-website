import React, { useEffect, useRef } from "react";
import "./Razor3.css";

const Razor3 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear previous script if re-rendered
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_RqHP6eoJfnDEba");
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

export default Razor3;
