import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import Razor1 from "../../components/Razor1/Razor1"; 
import Razor2 from "../../components/Razor2/Razor2"; 
import Razor3 from "../../components/Razor3/Razor3";
import { CardContainer, CardBody, CardItem } from "../UI/ThreeDCard";

const plans = [
  {
    id: 1,
    title: "Basic",
    price: 5000,
    priceText: "₹5000",
    Tenders: "Upto 10",
    Validity: "3 Months",
    Addidtional: "N/A"
  },
  {
    id: 2,
    title: "Standard",
    price: 10000,
    priceText: "₹10000",
    Tenders: "Upto 20",
    Validity: "6 Months",
    Addidtional: "GeM Registration Support"
  },
  {
    id: 3,
    title: "Premium",
    price: 20000,
    priceText: "₹20000",
    Tenders: "Upto 50",
    Validity: "12 Months",
    Addidtional: "GeM Support, Cataloging, MSME"
  },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]); 
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--bg-color)] flex flex-col justify-between">
      
      {/* --- Main Content --- */}
      <div className="py-20 px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-color)] mb-4">
            Choose Your Plan
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">
            Select the best tender plan that fits your business needs.
          </p>
        </div>

        {/* --- 3D Cards Grid --- */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} onClick={() => setSelectedPlan(plan)}>
              <CardContainer className="inter-var cursor-pointer">
                <CardBody 
                  className={`relative group/card hover:shadow-2xl hover:shadow-cyan-500/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-6 border transition-all duration-300
                  ${selectedPlan.id === plan.id 
                    ? "bg-[var(--bg-secondary)] border-[var(--accent-cyan)] shadow-[0_0_15px_rgba(107,211,211,0.3)] scale-105" 
                    : "bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--accent-cyan)]"
                  }`}
                >
                  
                  {/* Plan Name */}
                  <CardItem translateZ="50" className="text-xl font-bold text-[var(--text-color)] mb-2">
                    {plan.title}
                  </CardItem>

                  {/* Price */}
                  <CardItem translateZ="60" className="w-full mt-2">
                    <span className="text-4xl font-extrabold text-[var(--accent-cyan)]">
                        {plan.priceText}
                    </span>
                  </CardItem>

                  {/* Divider Line */}
                  <div className="w-full h-[1px] bg-[var(--border-color)] my-6 opacity-50"></div>

                  {/* Features List */}
                  <CardItem translateZ="40" className="w-full">
                    <ul className="space-y-4 text-[var(--text-secondary)] text-sm font-medium">
                        <li className="flex justify-between border-b border-[var(--border-color)] pb-2">
                            <span>Tenders:</span>
                            <span className="text-[var(--text-color)]">{plan.Tenders}</span>
                        </li>
                        <li className="flex justify-between border-b border-[var(--border-color)] pb-2">
                            <span>Validity:</span>
                            <span className="text-[var(--text-color)]">{plan.Validity}</span>
                        </li>
                        <li className="flex flex-col gap-1 pt-1">
                            <span>Additional:</span>
                            <span className="text-[var(--text-color)] text-xs leading-relaxed">{plan.Addidtional}</span>
                        </li>
                    </ul>
                  </CardItem>

                  {/* Selection Status Badge */}
                  <div className="mt-8 flex justify-between items-center">
                    {selectedPlan.id === plan.id ? (
                        <CardItem translateZ={20} className="px-4 py-2 rounded-full text-xs font-bold bg-[var(--accent-cyan)] text-black shadow-lg">
                          Selected
                        </CardItem>
                    ) : (
                        <CardItem translateZ={20} className="px-4 py-2 rounded-full text-xs font-semibold text-[var(--text-secondary)] border border-[var(--border-color)]">
                          Tap to Select
                        </CardItem>
                    )}
                  </div>

                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>

        {/* --- Payment Buttons Section --- */}
        <div className="mt-16 flex justify-center items-center pb-10">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl border border-[var(--accent-cyan)] shadow-lg text-center max-w-md w-full">
                <h3 className="text-[var(--text-color)] mb-4 text-lg font-semibold">
                    Proceed with {selectedPlan.title} Plan
                </h3>
                
                {selectedPlan.price === 5000 && <Razor1 />}
                {selectedPlan.price === 10000 && <Razor2 />}
                {selectedPlan.price === 20000 && <Razor3 />}
            </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Plans;