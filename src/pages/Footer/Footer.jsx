import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-column">
          <h3>Address</h3>
          <p><em>Office No. – 1502, 15th Floor Tower S, Sector – 1, Cloud Tower 9, Vaishali, Uttar Pradesh – 201010</em></p>
          <p>support@ovinenterprises.com</p>

          <h3>Work Hours</h3>
          <p>Monday – Saturday : 10:00 AM – 06:00 PM</p>
          
          <p>Sunday : Closed</p>

          <h3>Contact Us</h3>
          <p>Ph: +91 8882423763, +91 7678592543</p>
          <p>Email: support@ovinenterprises.com</p>

          {/* <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">FAQs</a></li>
          </ul> */}
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <h2>Providing Strategic Consultants for business Growth</h2>
          <h3>Let's talk</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/ovin-enterprises/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedin  id="uicon"/></a>
            {/* <a href="https://justdial.com" target="_blank" rel="noopener noreferrer"><SiJustdial /></a> */}
            <a href="https://www.instagram.com/ovinenterprises?igsh=MXRidzB1MHZmZDg3bA==" target="_blank" rel="noopener noreferrer"><FaInstagram  id="uicon"/></a>
            <a href=" https://wa.me/qr/4LTKRJLHIFFAA1" target="_blank" rel="noopener noreferrer"><FaWhatsapp id="uicon" /></a>
            <a href="https://www.youtube.com/@OvinEnterprises" target="_blank" rel="noopener noreferrer"><FaYoutube id="uicon" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 ovinenterprises</p>
        <p>Powered by ovinenterprises</p>
      </div>
    </footer>
  );
};

export default Footer;
