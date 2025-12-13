import React from "react";
import "./PricingSection.css";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate(); // ✅ Yeh yahan hona chahiye

  const handleNavigate = () => {
    navigate("/Contact");
   
  };

  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <p className="trial-text">
          {/* <span className="green-text">FREE</span> 3-days Trial plan for all new users! */}
        </p>
        <h1 className="price-heading">
          Pay as you go <span className="highlight">₹199 Per Tender</span>
        </h1>
        <p className="description">
          Perfect option for occasional users who are just starting business or exploring a new state. 
          Pay only for what you use. Now users can download documents without subscribing to a plan and 
          also add more states to their Solo or Business plans.
        </p>

        <div className="button-group">
          {/* <button className="btn learn-btn">Learn More</button> */}
          <button className="btn trial-btn" onClick={handleNavigate}>Get Free Trial</button>
        </div>

        <p className="note-text">Thousands of SMEs use this monthly</p>
      </div>

      <div className="contact-section">
        <div className="contact-text">
          <h2>Have more questions?</h2>
          <p>We're here to help with any questions you have about plans, pricing, and supported features.</p>
        </div>
        <button className="btn contact-btn" onClick={handleNavigate}>
          📞 Contact Now
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
