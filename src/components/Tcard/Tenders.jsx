import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tenders.css";

import construction from "../../assets/construction.avif";
import road from "../../assets/road.jpeg";
import tt2 from "../../assets/tt2.jpeg";
import painting from "../../assets/painting.jpg";
import fabrication from "../../assets/fabrication.jpeg";
import pump from "../../assets/Pumps.webp";
import pwd from "../../assets/PWD.webp";
import railway from "../../assets/railway.jpg";
import ireps from "../../assets/ireps.png";
import nhai from "../../assets/nhai.png";
import mc from "../../assets/mc.png";
import rdd from "../../assets/Rdd.png";
import phed from "../../assets/PHD.png";
import dbb from "../../assets/DBS.png";

const keywordsss = [
  { imgk: construction, titlek: "Construction Tenders", countk: "28.9K" },
  { imgk: road, titlek: "Road Tenders", countk: "24.8K" },
  { imgk: tt2, titlek: "GEM Tenders", countk: "24.6K" },
  { imgk: painting, titlek: "Painting Tenders", countk: "21.1K" },
  { imgk: fabrication, titlek: "Fabrication Tenders", countk: "9.7K" },
  { imgk: pump, titlek: "Water Tenders", countk: "32K" },
  { imgk: railway, titlek: "Railway Tenders", countk: "2.7K" }
];

const authorities = [
  { imgk: pwd, titlek: "PWD Tenders", countk: "8K" },
  { imgk: ireps, titlek: "IREPS Tenders", countk: "568" },
  { imgk: nhai, titlek: "NHAI Tenders", countk: "413" },
  { imgk: mc, titlek: "MC Tenders", countk: "6.8K" },
  { imgk: rdd, titlek: "RDD Tenders", countk: "2.4K" },
  { imgk: phed, titlek: "PHED Tenders", countk: "5.2K" },
  { imgk: dbb, titlek: "DLB Tenders", countk: "1.5K" }
];

const Card = ({ imgk, titlek, countk, onClick }) => (
  <div className="tenderk-cardk">
    <img src={imgk} alt={titlek} />
    <h3>{titlek}</h3>
    <p>{countk} Tenders</p>
    <button onClick={onClick}>Connect Us</button>
  </div>
);

export default function Tenders() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Contact");
  };

  return (
    <div className="tendersk-containerk">
      <section>
        <h2 id="kk">Explore by Keywords</h2>
        <div className="cardk-gridk">
          {keywordsss.map((item, i) => (
            <Card key={i} {...item} onClick={handleNavigate} />
          ))}
        </div>
      </section>

      <section>
        <h2>Explore by Authorities</h2>
        <div className="cardk-gridk">
          {authorities.map((item, i) => (
            <Card key={i} {...item} onClick={handleNavigate} />
          ))}
        </div>
      </section>
    </div>
  );
}
