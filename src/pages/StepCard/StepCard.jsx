import React from 'react';
import './StepCard.css';

function StepCard({ icon2, title2, description2, id }) {
  return (
    <div className="step-card">
      <div className="step-icon">{icon2}</div>
      <div className="step-number">{id}</div>
      <h4 className="step-title">{title2}</h4>
      <p className="step-desc">{description2}</p>
    </div>
  );
}

export default StepCard;
