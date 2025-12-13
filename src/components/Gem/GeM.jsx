import React from 'react';
import './GeM.css';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    label: 'BRONZE 6 Months',
    sub: '₹ 20 Lakhs Order Cover',
    products: true,
    assess: 'GEM, CPPP, STATE E-PROCURE, PSU PORTALS',
    incidents: 'Unlimited',
    competition: false,
    distributor: false,
    analytics: false,
  },
  {
    label: 'SILVER 1 YEARS',
    sub: '₹ 50 Lakhs Order Cover',
    products: true,
    assess: 'GEM, CPPP, STATE E-PROCURE, PSU PORTALS',
    incidents: 'Unlimited',
    competition: false,
    distributor: false,
    analytics: false,
  },
  {
    label: 'GOLD 2 YEARS',
    sub: '₹ 1 crore Order Cover',
    products: true,
    assess: 'GEM, CPPP, STATE E-PROCURE, PSU PORTALS',
    incidents: 'Unlimited',
    competition: false,
    distributor: false,
    analytics: false,
  },
  {
    label: 'DIAMOND 3 YEARS',
    sub: '₹ 3 Crores Order Cover',
    products: true,
    assess: 'GEM, CPPP, STATE E-PROCURE, PSU PORTALS',
    incidents: 'Unlimited',
    competition: false,
    distributor: true,
    analytics: false,
  }
];

const commonChecks = (
  <span style={{ color: '#5bc0be', fontWeight: 'bold' }}>✔</span>
);

const GeM = () => {
  const navigate = useNavigate();   // ✅ hook yahan hona chahiye

  const bothHard = () => {
    navigate("/BDev.jsx");
  };

  return (
    <div className="gem-table-bg" onClick={bothHard}>
      <h2 className="gem-title">Business Development Service</h2>
      <p className="gem-subtitle"></p>
      <p className="gem-subtitle">
        Choose from tailored Business consultation and GeM Consultancy Services plans,
        designed to support sustained growth and success on GeM.
      </p>
      <div className="gem-table-wrapper">
        <table className="gem-table">
          <thead>
            <tr>
              <th>Features</th>
              {plans.map(plan => (
                <th key={plan.label}>
                  <div>{plan.label}</div>
                  <span className="gem-sub">{plan.sub}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GeM Registration & Multi-Portal Enablement</td>
              {plans.map(plan => <td key={plan.label}>{plan.assess}</td>)}
            </tr>
            <tr>
              <td>Product/Service Cataloging</td>
              {plans.map((_, i) => <td key={i}>{commonChecks}</td>)}
            </tr>
            <tr>
              <td>Tender Identification & Opportunity Matching</td>
              {plans.map(plan => (
                <td key={plan.label}>
                  {plan.products ? "DAILY" : "Not Available"}
                </td>
              ))}
            </tr>
            <tr>
              <td>Tender Study & Analysis</td>
              {plans.map((_, i) => <td key={i}>{commonChecks}</td>)}
            </tr>
            <tr>
              <td>Professional Documentation Preparation</td>
              {plans.map((_, i) => <td key={i}>{commonChecks}</td>)}
            </tr>
            <tr>
              <td>Strategic & Competitive Bidding</td>
              {plans.map((_, i) => <td key={i}>{commonChecks}</td>)}
            </tr>
            <tr>
              <td>Timely & Error-free Submission</td>
              {plans.map((_, i) => <td key={i}>{commonChecks}</td>)}
            </tr>
            <tr>
              <td>Post-Bid Support</td>
              {plans.map(plan => (
                <td key={plan.label}>
                  {plan.analytics ? commonChecks : <span>INVOICE GENERATION & BUYER CO-ORDINATION</span>}
                </td>
              ))}
            </tr>
            <tr>
              <td>Incident Management</td>
              {plans.map(plan => <td key={plan.label}>{plan.incidents}</td>)}
            </tr>
            <tr>
              <td>Competitor Rate Sheet</td>
              {plans.map(plan => (
                <td key={plan.label}>
                  {plan.competition ? commonChecks : <span>FOR 1 YEAR</span>}
                </td>
              ))}
            </tr>
            <tr>
              <td>Payment Follow-up</td>
              {plans.map(plan => (
                <td key={plan.label}>
                  {plan.distributor ? commonChecks : <span style={{ color: '#5bc0be' }}>✔</span>}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeM;