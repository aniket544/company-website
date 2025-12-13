import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // for redirection
import "./MagicBento2.css";

const cards = [
  {
    title: "GeM Registration",
    desc: "Unlock the maximum potential of your GeM account with our comprehensive account management services.",
    link: "/Gr.jsx",
  },
  {
    title: "GeM Consultancy",
    desc: "Looking for a reliable GeM Portal Consultant near you? You're in the right place!",
    link: "/Gc.jsx",
  },
  {
    title: "Tender Participation",
    desc: "Verify suitable bids, document management, and 100% compliance. Boost your win rate while we manage the process from start to submission!",
    link: "/Tp.jsx",
  },
  {
    title: "Business  Developement Services",
    desc: "Verify suitable bids, document management, and 100% compliance. Boost your win rate while we manage the process from start to submission!",
    link: "/BDev.jsx",
  },
  {
    title: "OEM Vendor Assessment",
    desc: "Verify suitable bids, document management, and 100% compliance. Boost your win rate while we manage the process from start to submission!",
    link: "/Tp.jsx",
  }
];

function MagicBento2() {
  const navigate = useNavigate();

  useEffect(() => {
    const cardElements = document.querySelectorAll(".card11");
    cardElements.forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

      });
    });
  }, []);

  return (
    <div className="card11-container11">
      {cards.map((card, index) => (
        <div
          className="card11"
          key={index}
          onClick={() => navigate(card.link)}
          style={{ cursor: "pointer" }}
        >
          <div className="spotlight11" />
          <div className="content11">
            <h1>{card.title}</h1>
            <p id="peraaa">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MagicBento2;