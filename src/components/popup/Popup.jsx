import React from 'react';
import './Popup.css';

const Popup = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        {title && <h3>{title}</h3>}
        <div className="popup-body">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
