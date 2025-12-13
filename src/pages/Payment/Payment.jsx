import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './Payment.css';
import Nav from '../../components/Nav/Nav';
import card from "../../assets/hhiijj.png";
import { useNavigate } from "react-router-dom";
import RazorpayButton from '../../components/Razorpay/RazorpayButton';

const PaymentPage = () => {
  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState('card');

  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const [upiDetails, setUpiDetails] = useState({
    upiId: '',
    verification: '',
  });

  const handleContinue = () => {
    navigate("/pricing");  // Route unchanged
  };

  return (
    <>
      <Nav />

      <div id='kkch'>
        <div className="payment-container">
          <h3>Complete your payment using Razorpay</h3>
          <RazorpayButton/>
        </div>

        {/* RIGHT SIDE PLAN BOX */}
        <div id='lodu_lalit'>
          <p className='pera'>choose your plan</p>

          <div>
            <img src={card} alt="card" className='crdimg' />

            <button className='planbtn' onClick={handleContinue}>
              Choose Plan
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaymentPage;
