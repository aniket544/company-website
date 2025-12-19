import React, { useState } from 'react';
import { FaLandmark, FaRocket, FaGlobeAmericas, FaPlus } from 'react-icons/fa';
import Popup from '../popup/Popup';
import './Vision.css';

const Vision = () => {
  const [openPopup, setOpenPopup] = useState(null);

  const handleOpen = (which) => setOpenPopup(which);
  const handleClose = () => setOpenPopup(null);

  const timelineData = [
    {
      id: 'past',
      step: "01",
      title: "Past",
      icon: <FaLandmark />,
      desc: "Built on strong foundations, innovation, and lessons learned from challenges that shaped our resilience and expertise.",
      color: "text-blue-500 dark:text-blue-400", // Dark mode me light blue, Light mode me dark blue
      borderColor: "hover:border-blue-400/50",
      glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]",
    },
    {
      id: 'present',
      step: "02",
      title: "Present",
      icon: <FaRocket />,
      desc: "Delivering cutting-edge solutions with agility, passion, and customer-centric innovation every single day.",
      color: "text-cyan-600 dark:text-[var(--accent-cyan)]",
      borderColor: "border-cyan-500/50 dark:border-[var(--accent-cyan)]/50",
      glow: "shadow-[0_0_40px_rgba(107,211,211,0.2)]",
      active: true 
    },
    {
      id: 'future',
      step: "03",
      title: "Future",
      icon: <FaGlobeAmericas />,
      desc: "Pioneering tomorrow with bold vision, sustainable growth, and transformative technologies that inspire the world.",
      color: "text-purple-600 dark:text-purple-400",
      borderColor: "hover:border-purple-400/50",
      glow: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]",
    }
  ];

  return (
    <div className="relative py-24 px-4 overflow-hidden text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-10 dark:opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="text-center mb-16">
           <span className="px-4 py-1.5 rounded-full border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-cyan-600 dark:text-[var(--accent-cyan)] text-xs font-mono tracking-widest uppercase backdrop-blur-sm">
             Our Timeline
           </span>
           <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">Journey</span> So Far
           </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           
           {/* Connecting Line (Desktop Only) */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2 -z-10"></div>

           {timelineData.map((item) => (
             <div 
                key={item.id}
                className={`group relative rounded-[2rem] p-8 text-center transition-all duration-500 
                  border 
                  ${item.borderColor || 'border-gray-200 dark:border-white/10'} 
                  ${item.glow} 
                  hover:-translate-y-2
                  
                  /* ✅ THEME FIX: Light Mode = White Card | Dark Mode = Black Glass */
                  bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-xl dark:shadow-none
                  ${item.active ? 'scale-105 z-10 ring-1 ring-cyan-500/50' : ''}
                `}
             >
                {/* ✅ NUMBER FIX: Ab ye card ke andar Top-Right me hai */}
                <span className={`absolute top-4 right-6 text-6xl font-black opacity-10 select-none ${item.id === 'present' ? 'text-cyan-500' : 'text-gray-500 dark:text-white'}`}>
                  {item.step}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110 
                  bg-gray-100 dark:bg-black border border-gray-200 dark:border-white/10 ${item.color}`}>
                   {item.icon}
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                   {item.desc}
                </p>

                {/* Plus Button */}
                <button
                  onClick={() => handleOpen(item.id)}
                  className={`mx-auto w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 
                    border-gray-300 dark:border-white/20 text-gray-500 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                    ${item.color.includes('cyan') ? 'border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white' : ''}
                  `}
                >
                  <FaPlus />
                </button>
             </div>
           ))}

        </div>
      </div>

      {/* Popups */}
      <Popup open={openPopup === 'past'} onClose={handleClose} title="More about our Past">
        <p>Detailed history, milestones, and key achievements.</p>
      </Popup>

      <Popup open={openPopup === 'present'} onClose={handleClose} title="More about our Present">
        <p>Current projects, teams, and the value delivered today.</p>
      </Popup>

      <Popup open={openPopup === 'future'} onClose={handleClose} title="More about our Future">
        <p>Long-term goals, roadmap, and innovation focus areas.</p>
      </Popup>

    </div>
  );
};

export default Vision;