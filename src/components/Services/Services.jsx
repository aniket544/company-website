import React, { useState } from 'react';
import { FaLaptopCode, FaGavel, FaSearchDollar, FaChartLine, FaBoxOpen, FaUserShield, FaArrowRight, FaHeadset, FaTimes, FaCalendarAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import Footer from '../../pages/Footer/Footer';
import DarkVeil from "../../pages/About/DarkVeil"; // ✅ Sun/Moon Animation Added

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal Open/Close Functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation Request Sent! We will call you shortly.");
    closeModal();
  };

  const services = [
    {
      id: 1,
      title: "GeM Registration",
      icon: <FaLaptopCode />,
      desc: "Complete profile setup on Government e-Marketplace with 100% compliance assurance.",
      features: ["Profile Creation", "Caution Money Support", "Vendor Assessment", "Document Verification"]
    },
    {
      id: 2,
      title: "Tender Bidding",
      icon: <FaGavel />,
      desc: "End-to-end support for participating in high-value government tenders.",
      features: ["Bid Identification", "Technical Documentation", "BOQ Preparation", "Final Submission"]
    },
    {
      id: 3,
      title: "L1 Analysis & Pricing",
      icon: <FaSearchDollar />,
      desc: "Strategic pricing analysis to help you become the Lowest Bidder (L1) without loss.",
      features: ["Competitor Analysis", "Market Price Trends", "Profit Margin Calculation", "Historical Data Review"]
    },
    {
      id: 4,
      title: "Catalog Management",
      icon: <FaBoxOpen />,
      desc: "Upload and manage your products/services on the GeM portal efficiently.",
      features: ["Product Listing", "Specification Management", "Image Optimization", "Category Selection"]
    },
    {
      id: 5,
      title: "Direct Orders (L1)",
      icon: <FaChartLine />,
      desc: "Get direct purchase orders from government departments through strategic positioning.",
      features: ["Direct Purchase Support", "L1 Purchase", "Custom Bid Participation", "Order Tracking"]
    },
    {
      id: 6,
      title: "Vendor Assessment",
      icon: <FaUserShield />,
      desc: "Get your brand approved and verified to build trust with government buyers.",
      features: ["OEM Panel Application", "QCI Assessment Support", "Video KYC Assistance", "Brand Approval"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[var(--accent-cyan)] selection:text-black">
      
      {/* 1. FIXED BACKGROUND (DarkVeil Animation) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0.03}
          speed={0.4}
          scanlineFrequency={800}
          warpAmount={0.15}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-20">

        {/* HERO HEADER */}
        <div className="text-center space-y-6">
           <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-xs font-mono tracking-widest uppercase">
             Our Expertise
           </span>
           <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
             Comprehensive Solutions <br /> for <span className="text-[var(--accent-cyan)]">Business Growth</span>
           </h1>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
             We don't just provide services; we provide a roadmap to win government contracts. Explore our specialized offerings tailored for your success.
           </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service) => (
             <div 
                key={service.id} 
                className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                   <div className="w-16 h-16 bg-black/50 rounded-2xl flex items-center justify-center text-3xl text-[var(--accent-cyan)] mb-6 shadow-lg border border-white/5 group-hover:border-[var(--accent-cyan)]/50 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent-cyan)] transition-colors">
                      {service.title}
                   </h3>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.desc}
                   </p>
                   <div className="h-px w-full bg-white/10 mb-6 group-hover:bg-[var(--accent-cyan)]/30 transition-colors"></div>
                   <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                           <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]"></span>
                           {feature}
                        </li>
                      ))}
                   </ul>
                   <div className="mt-8 flex items-center gap-2 text-[var(--accent-cyan)] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer" onClick={openModal}>
                      Book Now <FaArrowRight />
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* CTA SECTION */}
        <div className="relative bg-zinc-900/80 border border-white/10 rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-cyan)]/20 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="w-20 h-20 bg-[var(--accent-cyan)]/10 rounded-full flex items-center justify-center text-3xl text-[var(--accent-cyan)] mx-auto mb-4 border border-[var(--accent-cyan)]/20">
                 <FaHeadset />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                 Not sure which service fits you?
              </h2>
              <p className="text-gray-400 text-lg">
                 Talk to our GeM experts. We analyze your business nature and suggest the most profitable roadmap for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button 
                    onClick={openModal}
                    className="px-8 py-4 rounded-xl bg-[var(--accent-cyan)] text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(107,211,211,0.4)] transition-all"
                 >
                    Book Free Consultation
                 </button>
              </div>
           </div>
        </div>

      </div>

      <Footer />

      {/* --- CONSULTATION MODAL (POPUP) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 w-full max-w-lg shadow-2xl animate-fadeInScale">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold text-white mb-2">Schedule a Call 📞</h2>
            <p className="text-gray-400 text-sm mb-6">Fill in your details, and our expert will contact you at your preferred time.</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[var(--accent-cyan)] transition-colors">
                  <FaUser className="text-gray-400 mr-3" />
                  <input type="text" placeholder="John Doe" className="bg-transparent text-white outline-none w-full" required />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[var(--accent-cyan)] transition-colors">
                  <FaPhoneAlt className="text-gray-400 mr-3" />
                  <input type="tel" placeholder="+91 98765 43210" className="bg-transparent text-white outline-none w-full" required />
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Preferred Date</label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[var(--accent-cyan)] transition-colors">
                    <input type="date" className="bg-transparent text-white outline-none w-full dark-calendar" required />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Time Slot</label>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none w-full focus:border-[var(--accent-cyan)]">
                    <option className="bg-black">10:00 AM - 12:00 PM</option>
                    <option className="bg-black">12:00 PM - 02:00 PM</option>
                    <option className="bg-black">02:00 PM - 04:00 PM</option>
                    <option className="bg-black">04:00 PM - 06:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 rounded-xl bg-[var(--accent-cyan)] text-black font-bold text-lg hover:shadow-[0_0_20px_rgba(107,211,211,0.4)] hover:scale-[1.02] transition-all mt-4">
                Confirm Booking
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Services;