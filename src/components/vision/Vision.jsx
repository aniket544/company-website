import React, { useState } from 'react';
import './Vision.css';
import Popup from '../popup/Popup';


const Vision = () => {
  const [openPopup, setOpenPopup] = useState(null); // 'past' | 'present' | 'future' | null

  const handleOpen = (which) => setOpenPopup(which);
  const handleClose = () => setOpenPopup(null);

  return (
    <div className="vision-timeline-container">
      <h2 className="vision-title">Our Vision Journey</h2>
      <div className="timeline">
        {/* Past Card */}
        <div className="timeline-card past">
          <div className="card-content">
            <div className="card-icon">🏛️</div>
            <h3>Past</h3>
            <p>
              Built on strong foundations, innovation, and lessons learned 
              from challenges that shaped our resilience and expertise.
            </p>
            <button
              className="card-plus"
              aria-label="More about past"
              onClick={() => handleOpen('past')}
            >
              +
            </button>
          </div>
        </div>

        {/* Arrow 1 */}
        {/* <div className="arrow">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path d="M0 20 H50 L40 5" stroke="#06b6d4" strokeWidth="3" />
            <path d="M0 20 H50 L40 35" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" 
                refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#06b6d4" />
              </marker>
            </defs>
          </svg>
        </div> */}

        {/* Present Card */}
        <div className="timeline-card present">
          <div className="card-content">
            <div className="card-icon">🚀</div>
            <h3>Present</h3>
            <p>
              Delivering cutting-edge solutions with agility, passion, 
              and customer-centric innovation every single day.
            </p>
            <button
              className="card-plus"
              aria-label="More about present"
              onClick={() => handleOpen('present')}
            >
              +
            </button>
          </div>
        </div>

        {/* Arrow 2 */}
        {/* <div className="arrow">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path d="M0 20 H50 L40 5" stroke="#0891b2" strokeWidth="3" markerEnd="url(#arrowhead2)" />
            <path d="M0 20 H50 L40 35" stroke="#0891b2" strokeWidth="3" markerEnd="url(#arrowhead2)" />
            <defs>
              <marker id="arrowhead2" markerWidth="10" markerHeight="10" 
                refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#0891b2" />
              </marker>
            </defs>
          </svg>
        </div> */}

        {/* Future Card */}
        <div className="timeline-card future">
          <div className="card-content">
            <div className="card-icon">🌟</div>
            <h3>Future</h3>
            <p>
              Pioneering tomorrow with bold vision, sustainable growth, 
              and transformative technologies that inspire the world.
            </p>
            <button
              className="card-plus"
              aria-label="More about future"
              onClick={() => handleOpen('future')}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Popups */}
      <Popup
        open={openPopup === 'past'}
        onClose={handleClose}
        title="More about our Past"
      >
        <p>Here you can add detailed history, milestones, and key achievements.</p>
      </Popup>

      <Popup
        open={openPopup === 'present'}
        onClose={handleClose}
        title="More about our Present"
      >
        <p>Explain current projects, teams, and the value delivered today.</p>
      </Popup>

      <Popup
        open={openPopup === 'future'}
        onClose={handleClose}
        title="More about our Future"
      >
        <p>Describe long-term goals, roadmap, and innovation focus areas.</p>
      </Popup>
    </div>
  );
};

export default Vision;
