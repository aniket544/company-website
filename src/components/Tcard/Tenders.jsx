import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaIndustry, FaArrowRight, FaFilter } from "react-icons/fa";

// Images Import (Wahi purane images)
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
  { imgk: construction, titlek: "Construction", countk: "28.9K" },
  { imgk: road, titlek: "Roads & Highways", countk: "24.8K" },
  { imgk: tt2, titlek: "GEM Portal", countk: "24.6K" },
  { imgk: painting, titlek: "Painting Works", countk: "21.1K" },
  { imgk: fabrication, titlek: "Fabrication", countk: "9.7K" },
  { imgk: pump, titlek: "Water & Pumps", countk: "32K" },
  { imgk: railway, titlek: "Railways", countk: "2.7K" }
];

const authorities = [
  { imgk: pwd, titlek: "PWD", countk: "8K+" },
  { imgk: ireps, titlek: "IREPS", countk: "568+" },
  { imgk: nhai, titlek: "NHAI", countk: "413+" },
  { imgk: mc, titlek: "Municipal Corp", countk: "6.8K" },
  { imgk: rdd, titlek: "Rural Dev (RDD)", countk: "2.4K" },
  { imgk: phed, titlek: "PHED", countk: "5.2K" },
  { imgk: dbb, titlek: "DLB", countk: "1.5K" }
];

export default function Tenders() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("keywords"); // 'keywords' or 'authorities'

  const handleNavigate = () => {
    navigate("/Contact");
  };

  const data = activeTab === "keywords" ? keywordsss : authorities;

  return (
    <div className="w-full">
      
      {/* --- HEADER & TABS --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        
        {/* Title */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
             <span className="w-2 h-8 bg-[var(--accent-cyan)] rounded-full"></span>
             Explore Opportunities
          </h2>
          <p className="text-gray-400 text-sm mt-1 ml-5">
            Browse active tenders by category or department.
          </p>
        </div>

        {/* Modern Toggle Switch */}
        <div className="flex bg-black/40 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
           <button 
              onClick={() => setActiveTab("keywords")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === "keywords" ? "bg-[var(--accent-cyan)] text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
           >
              <FaIndustry /> By Industry
           </button>
           <button 
              onClick={() => setActiveTab("authorities")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === "authorities" ? "bg-[var(--accent-cyan)] text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
           >
              <FaBuilding /> By Authority
           </button>
        </div>
      </div>

      {/* --- CARDS GRID --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
        {data.map((item, i) => (
          <div 
            key={i} 
            onClick={handleNavigate}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[var(--accent-cyan)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(107,211,211,0.1)]"
          >
            
            {/* Image Cover */}
            <div className="h-32 w-full relative overflow-hidden">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
               <img 
                 src={item.imgk} 
                 alt={item.titlek} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
               />
               {/* Floating Count Badge */}
               <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg text-xs font-bold text-[var(--accent-cyan)] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  {item.countk}
               </div>
            </div>

            {/* Content Body */}
            <div className="p-5 relative">
               <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--accent-cyan)] transition-colors truncate">
                 {item.titlek}
               </h3>
               <p className="text-xs text-gray-500 mb-4">Click to view all active bids</p>
               
               {/* Connect Button (Full Width on Hover) */}
               <div className="flex items-center justify-between border-t border-white/5 pt-4 group-hover:border-[var(--accent-cyan)]/20 transition-colors">
                  <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">Connect Now</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[var(--accent-cyan)] group-hover:bg-[var(--accent-cyan)] group-hover:text-black transition-all">
                     <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
               </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}