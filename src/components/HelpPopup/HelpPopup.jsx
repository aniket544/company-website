import React, { useState, useEffect } from "react";
import "./HelpPopup.css";

const HelpPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.elements[0].value,
      lastName: e.target.elements[1].value,
      companyName: e.target.elements[2].value,
      email: e.target.elements[3].value,
      mobile: e.target.elements[4].value,
      message: e.target.elements[5].value
    };

    try {
      const response = await fetch('https://formspree.io/f/xblynarq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        closePopup(); // Close popup on success
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={closePopup}>×</button>
            <h3>Need Help?</h3>
            <p>Fill out this form to get a callback.</p>
            <form className="popup-form" id="callbackForm" onSubmit={handleSubmit}>
              <div className="input-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="text" placeholder="Company Name" required />
              <div className="input-row">
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Mobile No" required />
              </div>
              <textarea id="tst" placeholder="Your Message" rows="3"></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpPopup;