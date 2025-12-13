
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./plans.css";
import Footer from "../../pages/Footer/Footer";
import Razor1 from "../../components/Razor1/Razor1"; 
import Razor2 from "../../components/Razor2/Razor2"; 
import Razor3 from "../../components/Razor3/Razor3"; // ⭐ Added Razor3

const plans = [
  {
    id: 1,
    title: "Basic",
    price: 5000,
    priceText: "₹5000",
    Tenders:"Upto 10",
    Validity:"3 Months",
    Addidtional:"N/A"
  },
  {
    id: 2,
    title: "Standard",
    price: 10000,
    priceText: "₹10000",
    Tenders:"Upto 20",
    Validity:"6 Months",
    Addidtional:"GeM Registration Support"
  },
  {
    id: 3,
    title: "Premium",
    price: 20000,
    priceText: "₹20000",
    Tenders:"Upto 50",
    Validity:"12 Months",
    Addidtional:"GeM Registration Support, Cataloging, MSME"
  },
];

const PlanPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]); 
  const navigate = useNavigate();

  // Razorpay script load
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const orderRes = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedPlan.price * 100 }),
      });

      const orderData = await orderRes.json();
      if (!orderData.success) {
        alert("Order not created");
        return;
      }

      const { id: order_id, amount, currency } = orderData.order;

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxx",
        amount,
        currency,
        name: "StreamFlix",
        description: `Subscription - ${selectedPlan.title}`,
        order_id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch("http://localhost:5000/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              alert("Payment Successful! 🎉");
              localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
              localStorage.setItem("paymentId", response.razorpay_payment_id);
              navigate("/success");
            } else {
              alert("Payment verification failed");
            }
          } catch (err) {
            console.error(err);
            alert("Verification failed");
          }
        },
        theme: { color: "#E50914" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="plan-container">
        <h1 className="heading">Choose the plan that’s right for you</h1>

        <div className="plan-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${selectedPlan.id === plan.id ? "selected" : ""}`}
              onClick={() => setSelectedPlan(plan)}
            >
              {selectedPlan.id === plan.id && (
                <div className="selected-badge">Selected</div>
              )}

              <h2>{plan.title}</h2>
              <p className="price">{plan.priceText}</p>
              <div className="line"></div>

              <ul className="features">
                <li><strong>Tenders:</strong> {plan.Tenders}</li>
                <li><strong>Validity:</strong> {plan.Validity}</li>
                <li><strong>Additional:</strong> {plan.Addidtional}</li>
              </ul>

              {plan.id === 2 && <div className="popular-tag">Most Popular</div>}
            </div>
          ))}
        </div>

        {/* ========= CONDITIONAL BUTTONS ========= */}

        {selectedPlan.price === 5000 && (
          <div className="razor1-wrapper">
            <Razor1 />
          </div>
        )}

        {selectedPlan.price === 10000 && (
          <div className="razor2-wrapper">
            <Razor2 />
          </div>
        )}

        {selectedPlan.price === 20000 && (
          <div className="razor3-wrapper">
            <Razor3 />   {/* ⭐ Added Razor3 for 20,000 plan */}
          </div>
        )}

      </div>

      <Footer />
    </>
  );
};

export default PlanPage;
