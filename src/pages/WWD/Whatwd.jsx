import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Footer from '../Footer/Footer';
import Tenders from '../../components/Tcard/Tenders'; 
import DarkVeil from '../About/DarkVeil'; 

// Images Import
import F from '../../assets/F.png'; // Ye wo Top wali Cyan Image hai
import Wwd from '../../assets/Wwd.png';
import W9 from '../../assets/W9.jpg';
import W11 from '../../assets/W11.jpg';
import W12 from '../../assets/W12.jpg';

function WhatWeDo() {
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

      <div className="relative z-10 pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">

        {/* --- TOP HERO SECTION (SAME AS ORIGINAL LAYOUT) --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
            
            {/* LEFT SIDE: TEXT (Jaisa Screenshot me tha) */}
            <div className="w-full md:w-1/2 space-y-8 z-10 order-2 md:order-1">
                
                {/* 1st Typewriter */}
                <div className="min-h-[100px] flex items-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--accent-cyan)] leading-tight drop-shadow-[0_0_15px_rgba(107,211,211,0.5)]">
                        <Typewriter
                            words={["Grow Your Business With Us", "Unlock Your Tender Opportunity", "Extend Your Government Sales"]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h1>
                </div>
                
                {/* Static Text */}
                <div className="text-xl text-gray-300 font-medium leading-relaxed border-l-4 border-[var(--accent-cyan)] pl-6">
                    <p>We provide strategic services to expand your</p>
                    <p>sales using GeM, CPPP, and E-tender Opportunities.</p>
                </div>

                {/* 2nd Typewriter Box */}
                <div className="mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 min-h-[40px]">
                         <Typewriter
                            words={["AI Driven Tenders", "Automatic Tender Maker", "Unlocking Tender Success", "Transforming Tenders with AI"]}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>
                    <p className="text-[var(--accent-cyan)] font-bold tracking-[0.2em] uppercase text-sm mt-4">
                        Error-Free, On Time, Every Time
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE: IMAGE (Wo bada wala Cyan Shape) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative w-full max-w-xl">
                     {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[var(--accent-cyan)]/10 blur-[80px] rounded-full"></div>
                    <img 
                        src={F} 
                        alt="Hero Graphic" 
                        className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
                    />
                </div>
            </div>

        </div>
        {/* --- HERO SECTION END --- */}


        {/* --- MAIN CONTENT SECTIONS (MODERN ZIG-ZAG) --- */}
        <div className="space-y-24">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 text-white border-b border-white/10 pb-8">What We Do</h1>

            {/* Section 1: Aim */}
            <div className="group bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-[var(--accent-cyan)]/30 transition-all">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors">Company's Aim</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            At Ovin Enterprises, we specialize in Business Development for Government Sales. We help companies grow their presence in public procurement by offering:
                        </p>
                        <ul className="space-y-3 text-gray-300 text-lg">
                            <li>📌 Direct Order Generation</li>
                            <li>📌 Tender Participation Management</li>
                            <li>📌 Software-Driven Procurement Intelligence</li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <img src={Wwd} className="w-full rounded-3xl shadow-2xl border border-white/5" />
                    </div>
                </div>
            </div>

            {/* Section 2: Direct Order (Reversed) */}
            <div className="group bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-[var(--accent-cyan)]/30 transition-all">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors">Direct Order Management</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We help clients secure direct government orders via GeM:
                        </p>
                        <ul className="space-y-3 text-gray-300 text-lg">
                            <li>✅ GeM profile creation & optimization</li>
                            <li>✅ Strategic listing of products/services</li>
                            <li>✅ Handling buyer enquiries</li>
                            <li>✅ Order closure support</li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <img src={W9} className="w-full rounded-3xl shadow-2xl border border-white/5" />
                    </div>
                </div>
            </div>

            {/* Section 3: Tender Participation */}
            <div className="group bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-[var(--accent-cyan)]/30 transition-all">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors">Tender Participation</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Order closure support with full documentation:
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                            <li>🔹 <strong>Tender Identification:</strong> Locate relevant tenders on official portals.</li>
                            <li>🔹 <strong>Bid Preparation:</strong> Prepare compliant proposals and submit on time.</li>
                            <li>🔹 <strong>Evaluation & Award:</strong> Support till contract awarding.</li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <img src={W11} className="w-full rounded-3xl shadow-2xl border border-white/5" />
                    </div>
                </div>
            </div>

            {/* Section 4: Software-Driven (Reversed) */}
            <div className="group bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-[var(--accent-cyan)]/30 transition-all">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors">Software-Driven Execution</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Leveraging technology for precision:
                        </p>
                        <ul className="space-y-3 text-gray-300 text-lg">
                            <li>🚀 Automated Opportunity Tracking</li>
                            <li>🚀 AI-Based Price Analysis</li>
                            <li>🚀 Smart Documentation</li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <img src={W12} className="w-full rounded-3xl shadow-2xl border border-white/5" />
                    </div>
                </div>
            </div>

        </div>

        {/* --- BOTTOM: LIVE OPPORTUNITIES (Updated Design) --- */}
        <div className="mt-20">
             <Tenders />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default WhatWeDo;