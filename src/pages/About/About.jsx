// import React from 'react';
// import DarkVeil from './DarkVeil';
// // ← Your silk shader
// import MagicBento from './MagicBento';
// import founder from '../../assets/Founder.jpg';
// import Footer from '../Footer/Footer';
// import emp6 from '../../assets/emp6.png';
// import emp2 from '../../assets/emp2.png';
// import emp1 from '../../assets/emp1.png';
// import emp4 from '../../assets/heryu.png';
// import Profile from '../../components/Profile/Profile.jsx';
// import './About.css';
// import Silk from '../../components/Silk.jsx';


// function About() {
//   return (
//     <>
//       {/* FULL PAGE: Your original flowing DarkVeil (kept exactly as before) */}
//       <div style={{ position: 'fixed', inset: 0, zIndex: -10 }}>
//         <DarkVeil
//           hueShift={0}
//           noiseIntensity={0.02}
//           scanlineIntensity={0.03}
//           speed={0.4}
//           scanlineFrequency={800}
//           warpAmount={0.15}
//         />
//       </div>

//       {/* MagicBento Section - On top of DarkVeil */}
//       <div className="magic">
//         <MagicBento
//           textAutoHide={true}
//           enableStars={true}
//           enableSpotlight={true}
//           enableBorderGlow={true}
//           enableTilt={true}
//           enableMagnetism={true}
//           clickEffect={true}
//           spotlightRadius={300}
//           particleCount={12}
//           glowColor="107, 211, 211"   // Perfect cyan match
//         />
//       </div>

//       {/* ABOUT SECTION - Silk background ONLY here */}
//       <div className="about-container" style={{ position: 'relative' }}>
//         {/* Silk Background - Only for this section */}
//         <div style={{
//           position: 'absolute',
//           top: -100,
//           left: -100,
//           right: -100,
//           bottom: -100,
//           zIndex: -1,
//           overflow: 'hidden',
//           borderRadius: '20px',
//           width: '1580px',
//         }}>
//           <Silk />
//         </div>
//         <h2>About Ovin - Ovin Enterprises Pvt. Ltd.</h2>
//         <ul>
//           <li>Ovin is a passionate team of experts focused on government tendering services.</li>
//           <li>We handle tasks like profile creation, vendor assessment,
//              documentation, formal submission, and post-submission support.</li>
//           <li>Our goal is to provide high-quality, end-to-end tender submission and management services.</li>
//           <li>We operate with the ideology: <strong>"Your Growth is Our Growth."</strong></li>
//         </ul>
//         {/* ... rest of your <ul> blocks ... */}
//         <ul>
//           <li>We offer training workshops to help sellers and buyers confidently use the GeM portal.</li>
//           <li>Support extends beyond documents and tools — we ensure seamless experience and higher bidding success rate on GeM.</li>
//         </ul>
//         <ul>
//           <li>Our team pioneers in this space — beyond tenders, we boost your brand presence and market reputation.</li>
//           <li>We focus on public awareness and business promotion through our expertise.</li>
//         </ul>

//         <h3>Our Mission</h3>
//         <ul>
//           <li>Empower businesses of all sizes — from startups to SMEs and established companies — to win dream projects.</li>
//           <li>Simplify tender submission and government project acquisition.</li>
//           <li>Eliminate errors and discrepancies during the process.</li>
//           <li>Improve market reputation and offer consistent support.</li>
//           <li>Guide clients through every step with education and confidence.</li>
//           <li>Help clients stand out in the competitive marketplace and achieve lasting success.</li>
//         </ul>

//         <h3>Our Vision</h3>
//         <ul>
//           <li>Become the leading force in simplifying government tendering in India.</li>
//           <li>Act as a bridge between businesses and government departments.</li>
//           <li>Empower and educate enterprises of all sizes to navigate tenders easily and compliantly.</li>
//           <li>Boost market presence and long-term success for clients.</li>
//         </ul>

//         <h3>Our Founder - Prithivi Sisodiya</h3>
//         <div className="founder-section">
//           <img src={founder} alt="Prithivi Sisodiya" className="founder-image" />
//           <ul>
//             <li><strong>Prithivi Sisodiya</strong> began his journey in the <strong>GeM</strong> and <strong>Government Tendering</strong> space early in his career.</li>
//             <li>He faced challenges, gained valuable insights, and steadily became a subject-matter expert.</li>
//             <li>To know more about his journey, please <a href="#" className="click-here">click here</a>.</li>
//           </ul>
//         </div>
//         <h2>Our Team</h2>

//         <div className='emp-cont'>



//           <div className='emp-grid1'>
//             <div className='emp-left'>
//               <Profile  title="Sales Manager" avatarUrl={emp6} showUserInfo={true} enableTilt={true} />
//             </div>
//             <div className='emp-right'>
//               <h2>Rupesh Kumar</h2>
//               <h4>Operational Manager</h4>
//               <h5>Responsibility:</h5>
//               <p>Ensures the company delivers exactly what was promised in the tender</p>
//               <p>on time, within cost, and profitably.</p>
//             </div>
//             <div id="hehe12">
//               <h1>01</h1>
//             </div>
//           </div>





//           {/* ... rest of your team grid (unchanged) ... */}
//           <div className='emp-grid2'>
//              <div id="hehe13">
//               <h1>02</h1>
//             </div>
//             <div className='emp-left1'>
//               <h3>Ajay Singh</h3>
//               <h4>Sales Manager</h4>
//               <h5>Responsibility:</h5>
//               <p>The Sales Manager identifies upcoming tenders, builds long-term client/consultant relationships, influences specifications.</p>
//             </div>
//             <div className='emp-right1'>
//               <Profile avatarUrl={emp2} />
//             </div>
            
//           </div>




//           <div className='emp-grid3'>
//             <div className='emp-left'>
//               <Profile avatarUrl={emp4} />
//             </div>
//             <div className='emp-right'>
//               <h3>Zubair Saifi</h3>
//               <h4>Software Developer</h4>
//               <h5>Responsibility:</h5>
//               <p>A Software Developer is the technical builder and problem-solver who analyzes requirements, designs, writes, tests, debugs, and maintains clean, efficient, secure, and scalable code.</p>
//             </div>
//             <div id="hehe14">
//               <h1>03</h1>
//             </div>
//           </div>



//           <div className='emp-grid4'>
//             <div id="hehe15">
//               <h1>04</h1>
//             </div>
//             <div className='emp-left1'>
//               <h3>Akshit Bidang</h3>
//               <h4>Software Developer</h4>
//               <h5>Responsibility:</h5>
//               <p>A Software Developer is the technical builder and problem-solver who analyzes requirements, designs, writes, tests, debugs, and maintains clean, efficient, secure, and scalable code.</p>
//             </div>
//             <div className='emp-righ'>
//               <Profile avatarUrl={emp1} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* TEAM SECTION - Silk background ONLY here */}
//       <div className="employee-pics" style={{ position: 'relative', marginTop: '100px' }}>
//         {/* Silk Background - Only for team section */}
//         {/* <div style={{
//           position: 'absolute',
//           top: -100, left: -100, right: -100, bottom: -100,
//           zIndex: -1,
//           overflow: 'hidden', 
//           borderRadius: '20px',
//         }}>
          
//         </div> */}



//       </div>

//       <Footer />
//     </>
//   );
// }

// export default About;


// import React from 'react';
// import { FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social icons (Optional)
// import DarkVeil from './DarkVeil';
// import MagicBento from './MagicBento';
// import Silk from '../../components/Silk.jsx'; // Make sure path sahi ho
// import Profile from '../../components/Profile/Profile.jsx';
// import Footer from '../Footer/Footer';
// import './About.css';

// // Images Import
// import founder from '../../assets/Founder.jpg';
// import emp6 from '../../assets/emp6.png';
// import emp2 from '../../assets/emp2.png';
// import emp1 from '../../assets/emp1.png';
// import emp4 from '../../assets/heryu.png';

// const About = () => {
//   return (
//     <div className="relative min-h-screen bg-black text-white selection:bg-[var(--accent-cyan)] selection:text-black font-sans overflow-x-hidden">
      
//       {/* 1. BACKGROUND LAYER (DarkVeil) - Fixed */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <DarkVeil
//           hueShift={0}
//           noiseIntensity={0.02}
//           scanlineIntensity={0.03}
//           speed={0.4}
//           scanlineFrequency={800}
//           warpAmount={0.15}
//         />
//       </div>

//       {/* 2. SCROLLABLE CONTENT LAYER */}
//       <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        
//         {/* --- SECTION: HERO & MAGIC BENTO --- */}
//         <div className="flex flex-col items-center gap-12">
//            <div className="text-center space-y-4">
//               <span className="px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-sm font-mono tracking-wider">
//                 WHO WE ARE
//               </span>
//               <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
//                 Ovin Enterprises
//               </h1>
//               <p className="max-w-2xl text-lg text-gray-400">
//                 Bridging the gap between businesses and government opportunities through innovation and expertise.
//               </p>
//            </div>
           
//            {/* MagicBento Container */}
//            <div className="w-full">
//              <MagicBento
//                textAutoHide={true}
//                enableStars={true}
//                enableSpotlight={true}
//                enableBorderGlow={true}
//                enableTilt={true}
//                enableMagnetism={true}
//                clickEffect={true}
//                spotlightRadius={300}
//                particleCount={12}
//                glowColor="107, 211, 211"
//              />
//            </div>
//         </div>


//         {/* --- SECTION: ABOUT & MISSION (With Silk Background) --- */}
//         <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
           
//            {/* Silk Component Background */}
//            <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
//              <Silk />
//            </div>

//            <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
//               {/* Left: About Text */}
//               <div className="space-y-6">
//                  <h2 className="text-4xl font-bold text-white">About Ovin</h2>
//                  <div className="h-1 w-20 bg-[var(--accent-cyan)] rounded-full"></div>
//                  <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-inside marker:text-[var(--accent-cyan)]">
//                     <li>Ovin is a passionate team of experts focused on government tendering services.</li>
//                     <li>We handle tasks like profile creation, vendor assessment, documentation, and formal submission.</li>
//                     <li>Our goal is to provide high-quality, end-to-end tender submission services.</li>
//                     <li>We operate with the ideology: <strong className="text-white">"Your Growth is Our Growth."</strong></li>
//                  </ul>
//               </div>

//               {/* Right: Mission & Vision */}
//               <div className="space-y-10">
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
//                     <p className="text-gray-400 leading-relaxed">
//                        Empower businesses of all sizes — from startups to SMEs — to win dream projects. We simplify tender submission, eliminate errors, and guide clients through every step with confidence.
//                     </p>
//                  </div>
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
//                     <p className="text-gray-400 leading-relaxed">
//                        To become the leading force in simplifying government tendering in India, acting as a bridge between businesses and government departments.
//                     </p>
//                  </div>
//               </div>
//            </div>
//         </div>


//         {/* --- SECTION: FOUNDER --- */}
//         <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl">
//            <div className="relative group">
//               <div className="absolute inset-0 bg-[var(--accent-cyan)] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
//               <img 
//                 src={founder} 
//                 alt="Prithivi Sisodiya" 
//                 className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-zinc-800 shadow-2xl"
//               />
//            </div>
//            <div className="flex-1 text-center md:text-left space-y-6">
//               <div>
//                  <h2 className="text-3xl font-bold text-white">Prithivi Sisodiya</h2>
//                  <p className="text-[var(--accent-cyan)] font-medium">Founder & CEO</p>
//               </div>
//               <p className="text-gray-400 text-lg leading-relaxed">
//                  Prithivi began his journey in the GeM and Government Tendering space early in his career. He faced challenges, gained valuable insights, and steadily became a subject-matter expert dedicated to simplifying the process for others.
//               </p>
//            </div>
//         </div>


//         {/* --- SECTION: TEAM (The Grid Fix) --- */}
//         <div className="space-y-16">
//            <div className="text-center">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet The Team</h2>
//               <p className="text-gray-500">The minds behind the magic.</p>
//            </div>

//            {/* Team Grid */}
//            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
//               {/* Member 1 */}
//               <TeamCard 
//                  number="01"
//                  name="Rupesh Kumar"
//                  role="Operational Manager"
//                  desc="Ensures the company delivers exactly what was promised in the tender on time, within cost, and profitably."
//                  image={emp6}
//                  profileComponent={<Profile title="Sales Manager" avatarUrl={emp6} showUserInfo={false} enableTilt={true} />}
//               />

//               {/* Member 2 */}
//               <TeamCard 
//                  number="02"
//                  name="Ajay Singh"
//                  role="Sales Manager"
//                  desc="Identifies upcoming tenders, builds long-term client/consultant relationships, and influences specifications."
//                  image={emp2}
//                  profileComponent={<Profile avatarUrl={emp2} showUserInfo={false} enableTilt={true} />}
//               />

//               {/* Member 3 */}
//               <TeamCard 
//                  number="03"
//                  name="Zubair Saifi"
//                  role="Software Developer"
//                  desc="The technical builder who analyzes requirements, designs, writes, tests, and maintains clean code."
//                  image={emp4}
//                  profileComponent={<Profile avatarUrl={emp4} showUserInfo={false} enableTilt={true} />}
//               />

//               {/* Member 4 */}
//               <TeamCard 
//                  number="04"
//                  name="Akshit Bidang"
//                  role="Software Developer"
//                  desc="Focuses on creating scalable solutions and ensuring the security and efficiency of the digital infrastructure."
//                  image={emp1}
//                  profileComponent={<Profile avatarUrl={emp1} showUserInfo={false} enableTilt={true} />}
//               />

//            </div>
//         </div>

//       </div>

//       <Footer />
//     </div>
//   );
// };

// // Helper Component for Team Cards (Keeps code clean)
// const TeamCard = ({ number, name, role, desc, profileComponent }) => (
//   <div className="group relative bg-white/5 border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 hover:bg-white/10 transition-all duration-300">
//      {/* Large Number Background */}
//      <span className="absolute top-2 right-4 text-8xl font-black text-white/5 select-none pointer-events-none group-hover:text-[var(--accent-cyan)]/10 transition-colors">
//         {number}
//      </span>

//      {/* Profile Component (Left) */}
//      <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 relative z-10">
//         {profileComponent}
//      </div>

//      {/* Text Info (Right) */}
//      <div className="flex-1 text-center md:text-left z-10">
//         <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
//         <p className="text-[var(--accent-cyan)] font-medium text-sm mb-4 uppercase tracking-wide">{role}</p>
//         <div className="h-px w-full bg-white/10 mb-4"></div>
//         <p className="text-gray-400 text-sm leading-relaxed">
//            {desc}
//         </p>
//      </div>
//   </div>
// );

// export default About;


// import React from 'react';
// import DarkVeil from './DarkVeil';
// import MagicBento from './MagicBento';
// import Silk from '../../components/Silk.jsx';
// import Footer from '../Footer/Footer';
// import './About.css';
// import React, { useState } from 'react'; // 👈 IMPORT ZAROORI HAI
// // Images Import
// import founder from '../../assets/Founder.jpg';
// import emp6 from '../../assets/emp6.png';
// import emp2 from '../../assets/emp2.png';
// import emp1 from '../../assets/emp1.png';
// import emp4 from '../../assets/heryu.png';

// const About = () => {
//   return (
//     <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[var(--accent-cyan)] selection:text-black">
      
//       {/* 1. FIXED BACKGROUND (DarkVeil) */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <DarkVeil
//           hueShift={0}
//           noiseIntensity={0.02}
//           scanlineIntensity={0.03}
//           speed={0.4}
//           scanlineFrequency={800}
//           warpAmount={0.15}
//         />
//       </div>

//       {/* 2. SCROLLABLE CONTENT */}
//       <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        
//         {/* --- HERO SECTION --- */}
//         <div className="flex flex-col items-center gap-12 text-center">
//            <div className="space-y-6">
//               <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-xs font-mono tracking-widest uppercase">
//                 Who We Are
//               </span>
//               <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
//                 Ovin Enterprises
//               </h1>
//               <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
//                 Bridging the gap between businesses and government opportunities through innovation and expertise.
//               </p>
//            </div>
           
//            {/* Magic Bento Grid */}
//            <div className="w-full">
//              <MagicBento
//                textAutoHide={true}
//                enableStars={true}
//                enableSpotlight={true}
//                enableBorderGlow={true}
//                spotlightRadius={300}
//                particleCount={12}
//                glowColor="107, 211, 211"
//              />
//            </div>
//         </div>


//         {/* --- ABOUT & MISSION (Silk Background) --- */}
//         <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
//            {/* Silk Component Inside */}
//            <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
//              <Silk />
//            </div>

//            <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
//               <div className="space-y-6">
//                  <h2 className="text-3xl font-bold text-white">About Ovin</h2>
//                  <div className="h-1 w-20 bg-[var(--accent-cyan)] rounded-full"></div>
//                  <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-inside marker:text-[var(--accent-cyan)]">
//                     <li>Ovin is a passionate team of experts focused on government tendering services.</li>
//                     <li>We handle tasks like profile creation, vendor assessment, documentation, and submission.</li>
//                     <li>Our goal is to provide high-quality, end-to-end tender management.</li>
//                     <li>We operate with the ideology: <strong className="text-white">"Your Growth is Our Growth."</strong></li>
//                  </ul>
//               </div>

//               <div className="space-y-10">
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
//                     <p className="text-gray-400">
//                        Empower businesses of all sizes to win dream projects. We simplify tender submission and guide clients through every step.
//                     </p>
//                  </div>
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
//                     <p className="text-gray-400">
//                        To become the leading force in simplifying government tendering in India.
//                     </p>
//                  </div>
//               </div>
//            </div>
//         </div>


//         {/* --- FOUNDER SECTION --- */}
//         <div className="flex flex-col md:flex-row items-center gap-10 bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl">
//            {/* Founder Image Fix */}
//            <div className="relative shrink-0">
//               <div className="absolute inset-0 bg-[var(--accent-cyan)] rounded-full blur-3xl opacity-20"></div>
//               <img 
//                 src={founder} 
//                 alt="Prithivi Sisodiya" 
//                 className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-zinc-800 shadow-2xl"
//               />
//            </div>
           
//            <div className="flex-1 text-center md:text-left space-y-4">
//               <div>
//                  <h2 className="text-3xl font-bold text-white">Prithivi Sisodiya</h2>
//                  <p className="text-[var(--accent-cyan)] font-medium">Founder & CEO</p>
//               </div>
//               <p className="text-gray-400 leading-relaxed">
//                  Prithivi began his journey in the GeM and Government Tendering space early in his career. He faced challenges, gained valuable insights, and steadily became a subject-matter expert dedicated to simplifying the process for others.
//               </p>
//            </div>
//         </div>


//         {/* --- TEAM SECTION (Grid Fix) --- */}
//         <div className="space-y-12">
//            <div className="text-center">
//               <h2 className="text-4xl font-bold mb-4">Meet The Team</h2>
//               <p className="text-gray-500">The minds behind the magic.</p>
//            </div>

//            {/* Responsive Grid for Team Cards */}
//            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
//               <TeamCard 
//                  number="01"
//                  name="Rupesh Kumar"
//                  role="Operational Manager"
//                  desc="Ensures the company delivers exactly what was promised in the tender on time, within cost, and profitably."
//                  image={emp6}
//               />

//               <TeamCard 
//                  number="02"
//                  name="Ajay Singh"
//                  role="Sales Manager"
//                  desc="Identifies upcoming tenders, builds long-term client/consultant relationships, and influences specifications."
//                  image={emp2}
//               />

//               <TeamCard 
//                  number="03"
//                  name="Zubair Saifi"
//                  role="Software Developer"
//                  desc="The technical builder who analyzes requirements, designs, writes, tests, and maintains clean code."
//                  image={emp4}
//               />

//               <TeamCard 
//                  number="04"
//                  name="Akshit Bidang"
//                  role="Software Developer"
//                  desc="Focuses on creating scalable solutions and ensuring the security and efficiency of the digital infrastructure."
//                  image={emp1}
//               />

//            </div>
//         </div>

//       </div>
//       <Footer />
//     </div>
//   );
// };

// // --- Helper Component for Consistent Image Alignment ---
// const TeamCard = ({ number, name, role, desc, image }) => (
//   <div className="group relative bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-white/10 transition-all duration-300 overflow-hidden">
     
//      {/* Background Number Watermark */}
//      <span className="absolute -top-4 -right-4 text-9xl font-black text-white/[0.03] pointer-events-none select-none group-hover:text-[var(--accent-cyan)]/[0.05] transition-colors">
//         {number}
//      </span>

//      {/* Image Wrapper (Perfect Circle Alignment) */}
//      <div className="shrink-0 relative z-10">
//         <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 border-2 border-white/10 group-hover:border-[var(--accent-cyan)] transition-colors">
//           <img 
//             src={image} 
//             alt={name} 
//             className="w-full h-full object-cover rounded-full"
//           />
//         </div>
//      </div>

//      {/* Text Content */}
//      <div className="flex-1 text-center sm:text-left relative z-10">
//         <h3 className="text-xl font-bold text-white">{name}</h3>
//         <p className="text-[var(--accent-cyan)] text-sm font-medium mb-3 uppercase tracking-wide">{role}</p>
//         <p className="text-gray-400 text-sm leading-relaxed opacity-90">
//            {desc}
//         </p>
//      </div>
//   </div>
// );

// export default About;



// import React, { useState } from 'react';
// import DarkVeil from './DarkVeil';
// import MagicBento from './MagicBento';
// import Silk from '../../components/Silk.jsx';
// import Footer from '../Footer/Footer';
// import './About.css';

// // Images Import
// import founder from '../../assets/Founder.jpg';
// import emp6 from '../../assets/emp6.png';
// import emp2 from '../../assets/emp2.png';
// import emp1 from '../../assets/emp1.png';
// import emp4 from '../../assets/heryu.png';

// const About = () => {
//   // State for Expanding Gallery (Team Section)
//   const [activeId, setActiveId] = useState('02'); // Default open card (Ajay Singh)

//   const teamMembers = [
//     {
//       id: '01',
//       name: 'Rupesh Kumar',
//       role: 'Operational Manager',
//       image: emp6,
//       desc: 'Ensures delivery on time, within cost, and profitability for every tender.'
//     },
//     {
//       id: '02',
//       name: 'Ajay Singh',
//       role: 'Sales Manager',
//       image: emp2,
//       desc: 'Identifies upcoming tenders & builds long-term client relationships.'
//     },
//     {
//       id: '03',
//       name: 'Zubair Saifi',
//       role: 'Software Developer',
//       image: emp4,
//       desc: 'Technical architect who designs scalable and secure code structures.'
//     },
//     {
//       id: '04',
//       name: 'Akshit Bidang',
//       role: 'Software Developer',
//       image: emp1,
//       desc: 'Focuses on digital infrastructure security and efficient solutions.'
//     },
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[var(--accent-cyan)] selection:text-black">
      
//       {/* 1. FIXED BACKGROUND (DarkVeil) */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <DarkVeil
//           hueShift={0}
//           noiseIntensity={0.02}
//           scanlineIntensity={0.03}
//           speed={0.4}
//           scanlineFrequency={800}
//           warpAmount={0.15}
//         />
//       </div>

//       {/* 2. SCROLLABLE CONTENT */}
//       <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        
//         {/* --- HERO SECTION --- */}
//         <div className="flex flex-col items-center gap-12 text-center">
//            <div className="space-y-6">
//               <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-xs font-mono tracking-widest uppercase">
//                 Who We Are
//               </span>
//               <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
//                 Ovin Enterprises
//               </h1>
//               <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
//                 Bridging the gap between businesses and government opportunities through innovation and expertise.
//               </p>
//            </div>
           
//            {/* Magic Bento Grid */}
//            <div className="w-full">
//              <MagicBento
//                textAutoHide={true}
//                enableStars={true}
//                enableSpotlight={true}
//                enableBorderGlow={true}
//                spotlightRadius={300}
//                particleCount={12}
//                glowColor="107, 211, 211"
//              />
//            </div>
//         </div>


//         {/* --- ABOUT & MISSION (Silk Background) --- */}
//         <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
//            {/* Silk Component Inside */}
//            <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
//              <Silk />
//            </div>

//            <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
//               <div className="space-y-6">
//                  <h2 className="text-3xl font-bold text-white">About Ovin</h2>
//                  <div className="h-1 w-20 bg-[var(--accent-cyan)] rounded-full"></div>
//                  <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-inside marker:text-[var(--accent-cyan)]">
//                     <li>Ovin is a passionate team of experts focused on government tendering services.</li>
//                     <li>We handle tasks like profile creation, vendor assessment, documentation, and submission.</li>
//                     <li>Our goal is to provide high-quality, end-to-end tender management.</li>
//                     <li>We operate with the ideology: <strong className="text-white">"Your Growth is Our Growth."</strong></li>
//                  </ul>
//               </div>

//               <div className="space-y-10">
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
//                     <p className="text-gray-400">
//                        Empower businesses of all sizes to win dream projects. We simplify tender submission and guide clients through every step.
//                     </p>
//                  </div>
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
//                     <p className="text-gray-400">
//                        To become the leading force in simplifying government tendering in India.
//                     </p>
//                  </div>
//               </div>
//            </div>
//         </div>


//         {/* --- FOUNDER SECTION --- */}
//         <div className="flex flex-col md:flex-row items-center gap-10 bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl">
//            <div className="relative shrink-0">
//               <div className="absolute inset-0 bg-[var(--accent-cyan)] rounded-full blur-3xl opacity-20"></div>
//               <img 
//                 src={founder} 
//                 alt="Prithivi Sisodiya" 
//                 className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-zinc-800 shadow-2xl"
//               />
//            </div>
           
//            <div className="flex-1 text-center md:text-left space-y-4">
//               <div>
//                  <h2 className="text-3xl font-bold text-white">Prithivi Sisodiya</h2>
//                  <p className="text-[var(--accent-cyan)] font-medium">Founder & CEO</p>
//               </div>
//               <p className="text-gray-400 leading-relaxed">
//                  Prithivi began his journey in the GeM and Government Tendering space early in his career. He faced challenges, gained valuable insights, and steadily became a subject-matter expert dedicated to simplifying the process for others.
//               </p>
//            </div>
//         </div>


//         {/* --- TEAM SECTION: EXPANDING GALLERY --- */}
//         <div className="py-10">
//             <div className="text-center mb-16">
//                <h2 className="text-4xl md:text-5xl font-bold mb-4">The Squad</h2>
//                <p className="text-gray-500">Hover to meet the experts.</p>
//             </div>

//             {/* Gallery Container */}
//             <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px] w-full">
              
//               {teamMembers.map((member) => (
//                 <div
//                   key={member.id}
//                   onClick={() => setActiveId(member.id)} // Mobile tap
//                   onMouseEnter={() => setActiveId(member.id)} // Desktop hover
//                   className={`relative flex items-end overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700 ease-out
//                     ${activeId === member.id ? 'flex-[3] grayscale-0 ring-2 ring-[var(--accent-cyan)]' : 'flex-[1] grayscale brightness-50 hover:brightness-75 border border-white/10'}
//                   `}
//                 >
                  
//                   {/* Background Image */}
//                   <img 
//                     src={member.image} 
//                     alt={member.name} 
//                     className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 
//                       ${activeId === member.id ? 'scale-100' : 'scale-110'}
//                     `}
//                   />
                  
//                   {/* Dark Gradient Overlay */}
//                   <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${activeId === member.id ? 'opacity-90' : 'opacity-60'}`}></div>

//                   {/* Content Box */}
//                   <div className="relative z-10 p-6 md:p-8 w-full">
                    
//                     {/* ID Number */}
//                     <div className={`text-5xl font-black mb-2 transition-all duration-500 ${activeId === member.id ? 'text-[var(--accent-cyan)] translate-y-0' : 'text-white/20 -translate-y-10'}`}>
//                       {member.id}
//                     </div>

//                     {/* Name & Details */}
//                     <div className={`transition-all duration-500 ${activeId === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:opacity-100 lg:rotate-[-90deg] lg:origin-bottom-left lg:absolute lg:bottom-20 lg:left-8 lg:translate-y-0 lg:whitespace-nowrap'}`}>
//                       <h3 className={`text-2xl md:text-3xl font-bold text-white ${activeId !== member.id && 'lg:text-4xl tracking-widest'}`}>
//                         {member.name}
//                       </h3>
                      
//                       {/* Description (Visible only when active) */}
//                       {activeId === member.id && (
//                         <div className="mt-4 overflow-hidden">
//                            <p className="text-[var(--accent-cyan)] font-bold uppercase tracking-wider text-sm mb-2">{member.role}</p>
//                            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
//                              {member.desc}
//                            </p>
//                         </div>
//                       )}
//                     </div>

//                   </div>
//                 </div>
//               ))}

//             </div>
//         </div>

//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default About;



// import React, { useState } from 'react';
// import DarkVeil from './DarkVeil';
// import MagicBento from './MagicBento';
// import Silk from '../../components/Silk.jsx';
// import Footer from '../Footer/Footer';
// import './About.css';

// // Images Import
// import founder from '../../assets/Founder.jpg';
// import emp6 from '../../assets/emp6.png';
// import emp2 from '../../assets/emp2.png';
// import emp1 from '../../assets/emp1.png';
// import emp4 from '../../assets/heryu.jpg';

// const About = () => {
//   // State for Expanding Gallery
//   const [activeId, setActiveId] = useState('02'); // Default Active Card

//   const teamMembers = [
//     {
//       id: '01',
//       name: 'Rupesh Kumar',
//       role: 'Operational Manager',
//       image: emp6,
//       desc: 'Ensures delivery on time, within cost, and profitability for every tender.'
//     },
//     {
//       id: '02',
//       name: 'Ajay Singh',
//       role: 'Sales Manager',
//       image: emp2,
//       desc: 'Identifies upcoming tenders & builds long-term client relationships.'
//     },
//     {
//       id: '03',
//       name: 'Zubair Saifi',
//       role: 'Software Developer',
//       image: emp4,
//       desc: 'Technical architect who designs scalable and secure code structures.'
//     },
//     {
//       id: '04',
//       name: 'Akshit Bidang',
//       role: 'Software Developer',
//       image: emp1,
//       desc: 'Focuses on digital infrastructure security and efficient solutions.'
//     },
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[var(--accent-cyan)] selection:text-black">
      
//       {/* 1. FIXED BACKGROUND (DarkVeil) */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <DarkVeil
//           hueShift={0}
//           noiseIntensity={0.02}
//           scanlineIntensity={0.03}
//           speed={0.4}
//           scanlineFrequency={800}
//           warpAmount={0.15}
//         />
//       </div>

//       {/* 2. SCROLLABLE CONTENT */}
//       <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        
//         {/* --- HERO SECTION --- */}
//         <div className="flex flex-col items-center gap-12 text-center">
//            <div className="space-y-6">
//               <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-xs font-mono tracking-widest uppercase">
//                 Who We Are
//               </span>
//               <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
//                 Ovin Enterprises
//               </h1>
//               <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
//                 Bridging the gap between businesses and government opportunities through innovation and expertise.
//               </p>
//            </div>
           
//            {/* Magic Bento Grid */}
//            <div className="w-full">
//              <MagicBento
//                textAutoHide={true}
//                enableStars={true}
//                enableSpotlight={true}
//                enableBorderGlow={true}
//                spotlightRadius={300}
//                particleCount={12}
//                glowColor="107, 211, 211"
//              />
//            </div>
//         </div>


//         {/* --- ABOUT & MISSION (Silk Background) --- */}
//         <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
//            <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
//              <Silk />
//            </div>

//            <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
//               <div className="space-y-6">
//                  <h2 className="text-3xl font-bold text-white">About Ovin</h2>
//                  <div className="h-1 w-20 bg-[var(--accent-cyan)] rounded-full"></div>
//                  <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-inside marker:text-[var(--accent-cyan)]">
//                     <li>Ovin is a passionate team of experts focused on government tendering services.</li>
//                     <li>We handle tasks like profile creation, vendor assessment, documentation, and submission.</li>
//                     <li>Our goal is to provide high-quality, end-to-end tender management.</li>
//                     <li>We operate with the ideology: <strong className="text-white">"Your Growth is Our Growth."</strong></li>
//                  </ul>
//               </div>

//               <div className="space-y-10">
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
//                     <p className="text-gray-400">
//                        Empower businesses of all sizes to win dream projects. We simplify tender submission and guide clients through every step.
//                     </p>
//                  </div>
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
//                     <p className="text-gray-400">
//                        To become the leading force in simplifying government tendering in India.
//                     </p>
//                  </div>
//               </div>
//            </div>
//         </div>


//         {/* --- FOUNDER SECTION --- */}
//         <div className="flex flex-col md:flex-row items-center gap-10 bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl">
//            <div className="relative shrink-0">
//               <div className="absolute inset-0 bg-[var(--accent-cyan)] rounded-full blur-3xl opacity-20"></div>
//               <img 
//                 src={founder} 
//                 alt="Prithivi Sisodiya" 
//                 className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-zinc-800 shadow-2xl"
//               />
//            </div>
           
//            <div className="flex-1 text-center md:text-left space-y-4">
//               <div>
//                  <h2 className="text-3xl font-bold text-white">Prithivi Sisodiya</h2>
//                  <p className="text-[var(--accent-cyan)] font-medium">Founder & CEO</p>
//               </div>
//               <p className="text-gray-400 leading-relaxed">
//                  Prithivi began his journey in the GeM and Government Tendering space early in his career. He faced challenges, gained valuable insights, and steadily became a subject-matter expert dedicated to simplifying the process for others.
//               </p>
//            </div>
//         </div>


//         {/* --- TEAM SECTION: FIXED EXPANDING GALLERY --- */}
//         <div className="py-10">
//             <div className="text-center mb-16">
//                <h2 className="text-4xl md:text-5xl font-bold mb-4">The Squad</h2>
//                <p className="text-gray-500">Hover to meet the experts.</p>
//             </div>

//             {/* Gallery Container */}
//             <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px] w-full">
              
//               {teamMembers.map((member) => (
//                 <div
//                   key={member.id}
//                   onClick={() => setActiveId(member.id)}
//                   onMouseEnter={() => setActiveId(member.id)}
//                   className={`relative flex items-end overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700 ease-out
//                     ${activeId === member.id 
//                       ? 'flex-[3] grayscale-0 ring-1 ring-[var(--accent-cyan)]' 
//                       : 'flex-[1] grayscale brightness-50 hover:brightness-75 border border-white/10'
//                     }
//                   `}
//                 >
                  
//                   {/* Background Image - FIX: object-top use kiya hai taaki head na kate */}
//                   <img 
//                     src={member.image} 
//                     alt={member.name} 
//                     className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 
//                       ${activeId === member.id ? 'scale-105' : 'scale-100'} 
//                     `}
//                   />
//                   {/* Note: Inactive card ko scale-100 rakha hai taaki wo aur zoom hokar cut na ho jaye. 
//                       Active hone par slight zoom (105) effect aayega. */}
                  
//                   {/* Dark Gradient Overlay */}
//                   <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${activeId === member.id ? 'opacity-80' : 'opacity-50'}`}></div>

//                   {/* Content Box */}
//                   <div className="relative z-10 p-6 md:p-8 w-full">
                    
//                     {/* ID Number */}
//                     <div className={`text-5xl font-black mb-2 transition-all duration-500 ${activeId === member.id ? 'text-[var(--accent-cyan)] translate-y-0' : 'text-white/30 -translate-y-6 scale-75 origin-bottom-left'}`}>
//                       {member.id}
//                     </div>

//                     {/* Name & Details */}
//                     <div className={`transition-all duration-500 ${activeId === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:opacity-100 lg:rotate-[-90deg] lg:origin-bottom-left lg:absolute lg:bottom-20 lg:left-8 lg:translate-y-0 lg:whitespace-nowrap'}`}>
//                       <h3 className={`text-2xl md:text-3xl font-bold text-white ${activeId !== member.id && 'lg:text-4xl tracking-widest drop-shadow-md'}`}>
//                         {member.name}
//                       </h3>
                      
//                       {/* Description (Visible only when active) */}
//                       {activeId === member.id && (
//                         <div className="mt-4 overflow-hidden animate-fadeIn">
//                            <p className="text-[var(--accent-cyan)] font-bold uppercase tracking-wider text-sm mb-2">{member.role}</p>
//                            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
//                              {member.desc}
//                            </p>
//                         </div>
//                       )}
//                     </div>

//                   </div>
//                 </div>
//               ))}

//             </div>
//         </div>

//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default About;


// import React, { useState } from 'react';
// import DarkVeil from './DarkVeil';
// import MagicBento from './MagicBento';
// import Silk from '../../components/Silk.jsx';
// import Footer from '../Footer/Footer';
// import './About.css';

// // Images Import
// import founder from '../../assets/Founder.jpg';
// import emp6 from '../../assets/emp6.png';
// import emp2 from '../../assets/emp2.png';
// import emp1 from '../../assets/emp1.png';
// import emp4 from '../../assets/heryu.jpg';

// const About = () => {
//   // State for Expanding Gallery (Desktop Only)
//   const [activeId, setActiveId] = useState('02');

//   const teamMembers = [
//     {
//       id: '01',
//       name: 'Rupesh Kumar',
//       role: 'Operational Manager',
//       image: emp6,
//       desc: 'Ensures delivery on time, within cost, and profitability for every tender.'
//     },
//     {
//       id: '02',
//       name: 'Ajay Singh',
//       role: 'Sales Manager',
//       image: emp2,
//       desc: 'Identifies upcoming tenders & builds long-term client relationships.'
//     },
//     {
//       id: '03',
//       name: 'Zubair Saifi',
//       role: 'Software Developer',
//       image: emp4,
//       desc: 'Technical architect who designs scalable and secure code structures.'
//     },
//     {
//       id: '04',
//       name: 'Akshit Bidang',
//       role: 'Software Developer',
//       image: emp1,
//       desc: 'Focuses on digital infrastructure security and efficient solutions.'
//     },
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[var(--accent-cyan)] selection:text-black">
      
//       {/* 1. FIXED BACKGROUND */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <DarkVeil
//           hueShift={0}
//           noiseIntensity={0.02}
//           scanlineIntensity={0.03}
//           speed={0.4}
//           scanlineFrequency={800}
//           warpAmount={0.15}
//         />
//       </div>

//       {/* 2. SCROLLABLE CONTENT */}
//       <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        
//         {/* --- HERO SECTION --- */}
//         <div className="flex flex-col items-center gap-12 text-center">
//            <div className="space-y-6">
//               <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-xs font-mono tracking-widest uppercase">
//                 Who We Are
//               </span>
//               <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
//                 Ovin Enterprises
//               </h1>
//               <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
//                 Bridging the gap between businesses and government opportunities through innovation and expertise.
//               </p>
//            </div>
           
//            <div className="w-full">
//              <MagicBento
//                textAutoHide={true}
//                enableStars={true}
//                enableSpotlight={true}
//                enableBorderGlow={true}
//                spotlightRadius={300}
//                particleCount={12}
//                glowColor="107, 211, 211"
//              />
//            </div>
//         </div>

//         {/* --- ABOUT & MISSION (Silk Background) --- */}
//         <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
//            <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
//              <Silk />
//            </div>

//            <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
//               <div className="space-y-6">
//                  <h2 className="text-3xl font-bold text-white">About Ovin</h2>
//                  <div className="h-1 w-20 bg-[var(--accent-cyan)] rounded-full"></div>
//                  <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-inside marker:text-[var(--accent-cyan)]">
//                     <li>Ovin is a passionate team of experts focused on government tendering services.</li>
//                     <li>We handle tasks like profile creation, vendor assessment, documentation, and submission.</li>
//                     <li>Our goal is to provide high-quality, end-to-end tender management.</li>
//                     <li>We operate with the ideology: <strong className="text-white">"Your Growth is Our Growth."</strong></li>
//                  </ul>
//               </div>

//               <div className="space-y-10">
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
//                     <p className="text-gray-400">
//                        Empower businesses of all sizes to win dream projects. We simplify tender submission and guide clients through every step.
//                     </p>
//                  </div>
//                  <div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
//                     <p className="text-gray-400">
//                        To become the leading force in simplifying government tendering in India.
//                     </p>
//                  </div>
//               </div>
//            </div>
//         </div>

//         {/* --- FOUNDER SECTION --- */}
//         <div className="flex flex-col md:flex-row items-center gap-10 bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl">
//            <div className="relative shrink-0">
//               <div className="absolute inset-0 bg-[var(--accent-cyan)] rounded-full blur-3xl opacity-20"></div>
//               <img 
//                 src={founder} 
//                 alt="Prithivi Sisodiya" 
//                 className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-zinc-800 shadow-2xl"
//               />
//            </div>
           
//            <div className="flex-1 text-center md:text-left space-y-4">
//               <div>
//                  <h2 className="text-3xl font-bold text-white">Prithivi Sisodiya</h2>
//                  <p className="text-[var(--accent-cyan)] font-medium">Founder & CEO</p>
//               </div>
//               <p className="text-gray-400 leading-relaxed">
//                  Prithivi began his journey in the GeM and Government Tendering space early in his career. He faced challenges, gained valuable insights, and steadily became a subject-matter expert dedicated to simplifying the process for others.
//               </p>
//            </div>
//         </div>

//         {/* --- TEAM SECTION: RESPONSIVE HYBRID LAYOUT --- */}
//         <div className="py-10">
//             <div className="text-center mb-16">
//                <h2 className="text-4xl md:text-5xl font-bold mb-4">The Squad</h2>
//                <p className="text-gray-500">Meet the experts behind the magic.</p>
//             </div>

//             {/* 🟢 MOBILE VIEW (Fixed Layout: Image Top, Text Bottom) */}
//             <div className="grid grid-cols-1 gap-8 md:hidden">
//               {teamMembers.map((member) => (
//                 <div key={member.id} className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden">
                  
//                   {/* Image Container - Height badha di aur Center focus kiya */}
//                   <div className="h-80 w-full relative">
//                     <img 
//                       src={member.image} 
//                       alt={member.name} 
//                       className="w-full h-full object-cover object-center" 
//                     />
                    
//                     {/* Bottom Gradient for smooth blend */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-90"></div>
                    
//                     {/* ID Number on Image */}
//                     <span className="absolute bottom-4 left-6 text-7xl font-black text-white/20 select-none">
//                       {member.id}
//                     </span>
//                   </div>

//                   {/* Content Container - Image ke neeche, overlap nahi */}
//                   <div className="p-8 relative bg-black/20 backdrop-blur-sm -mt-2">
//                     <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
//                     <p className="text-[var(--accent-cyan)] text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-4 inline-block">
//                       {member.role}
//                     </p>
//                     <p className="text-gray-400 text-base leading-relaxed">
//                       {member.desc}
//                     </p>
//                   </div>

//                 </div>
//               ))}
//             </div>

//             {/* 🔵 DESKTOP VIEW (Expanding Gallery - Cool Animation) */}
//             <div className="hidden md:flex flex-row gap-4 h-[500px] w-full">
//               {teamMembers.map((member) => (
//                 <div
//                   key={member.id}
//                   onMouseEnter={() => setActiveId(member.id)}
//                   className={`relative flex items-end overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700 ease-out
//                     ${activeId === member.id 
//                       ? 'flex-[3] grayscale-0 ring-1 ring-[var(--accent-cyan)]' 
//                       : 'flex-[1] grayscale brightness-50 hover:brightness-75 border border-white/10'
//                     }
//                   `}
//                 >
//                   <img 
//                     src={member.image} 
//                     alt={member.name} 
//                     className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 
//                       ${activeId === member.id ? 'scale-105' : 'scale-100'} 
//                     `}
//                   />
//                   <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${activeId === member.id ? 'opacity-80' : 'opacity-50'}`}></div>

//                   <div className="relative z-10 p-8 w-full">
//                     <div className={`text-5xl font-black mb-2 transition-all duration-500 ${activeId === member.id ? 'text-[var(--accent-cyan)] translate-y-0' : 'text-white/30 -translate-y-6 scale-75 origin-bottom-left'}`}>
//                       {member.id}
//                     </div>
//                     <div className={`transition-all duration-500 ${activeId === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:opacity-100 lg:rotate-[-90deg] lg:origin-bottom-left lg:absolute lg:bottom-20 lg:left-8 lg:translate-y-0 lg:whitespace-nowrap'}`}>
//                       <h3 className={`text-3xl font-bold text-white ${activeId !== member.id && 'lg:text-4xl tracking-widest drop-shadow-md'}`}>
//                         {member.name}
//                       </h3>
//                       {activeId === member.id && (
//                         <div className="mt-4 overflow-hidden animate-fadeIn">
//                            <p className="text-[var(--accent-cyan)] font-bold uppercase tracking-wider text-sm mb-2">{member.role}</p>
//                            <p className="text-gray-300 text-base leading-relaxed max-w-lg">
//                              {member.desc}
//                            </p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//         </div>

//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default About;


import React, { useState } from 'react';
import DarkVeil from './DarkVeil';
import MagicBento from './MagicBento';
import Silk from '../../components/Silk.jsx';
import Footer from '../Footer/Footer';
import './About.css';

// Images Import
import founder from '../../assets/Founder.jpg';
import emp6 from '../../assets/emp6.png';
import emp2 from '../../assets/emp2.png';
import emp1 from '../../assets/emp1.png';
import emp4 from '../../assets/heryu.jpg';

const About = () => {
  // State for Expanding Gallery (Desktop Only)
  const [activeId, setActiveId] = useState('02');

  const teamMembers = [
    {
      id: '01',
      name: 'Rupesh Kumar',
      role: 'Operational Manager',
      image: emp6,
      desc: 'Ensures delivery on time, within cost, and profitability for every tender.'
    },
    {
      id: '02',
      name: 'Ajay Singh',
      role: 'Sales Manager',
      image: emp2,
      desc: 'Identifies upcoming tenders & builds long-term client relationships.'
    },
    {
      id: '03',
      name: 'Zubair Saifi',
      role: 'Software Developer',
      image: emp4,
      desc: 'Technical architect who designs scalable and secure code structures.'
    },
    {
      id: '04',
      name: 'Akshit Bidang',
      role: 'Software Developer',
      image: emp1,
      desc: 'Focuses on digital infrastructure security and efficient solutions.'
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[var(--accent-cyan)] selection:text-black">
      
      {/* 1. FIXED BACKGROUND */}
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

      {/* 2. SCROLLABLE CONTENT */}
      <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col items-center gap-12 text-center">
           <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-xs font-mono tracking-widest uppercase">
                Who We Are
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Ovin Enterprises
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
                Bridging the gap between businesses and government opportunities through innovation and expertise.
              </p>
           </div>
           
           <div className="w-full">
             <MagicBento
               textAutoHide={true}
               enableStars={true}
               enableSpotlight={true}
               enableBorderGlow={true}
               spotlightRadius={300}
               particleCount={12}
               glowColor="107, 211, 211"
             />
           </div>
        </div>

        {/* --- ABOUT & MISSION --- */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
           <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
             <Silk />
           </div>

           <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-white">About Ovin</h2>
                 <div className="h-1 w-20 bg-[var(--accent-cyan)] rounded-full"></div>
                 <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-inside marker:text-[var(--accent-cyan)]">
                    <li>Ovin is a passionate team of experts focused on government tendering services.</li>
                    <li>We handle tasks like profile creation, vendor assessment, documentation, and submission.</li>
                    <li>Our goal is to provide high-quality, end-to-end tender management.</li>
                    <li>We operate with the ideology: <strong className="text-white">"Your Growth is Our Growth."</strong></li>
                 </ul>
              </div>

              <div className="space-y-10">
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                    <p className="text-gray-400">
                       Empower businesses of all sizes to win dream projects. We simplify tender submission and guide clients through every step.
                    </p>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                    <p className="text-gray-400">
                       To become the leading force in simplifying government tendering in India.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* --- FOUNDER SECTION --- */}
        <div className="flex flex-col md:flex-row items-center gap-10 bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl">
           <div className="relative shrink-0">
              <div className="absolute inset-0 bg-[var(--accent-cyan)] rounded-full blur-3xl opacity-20"></div>
              <img 
                src={founder} 
                alt="Prithivi Sisodiya" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-zinc-800 shadow-2xl"
              />
           </div>
           
           <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                 <h2 className="text-3xl font-bold text-white">Prithivi Sisodiya</h2>
                 <p className="text-[var(--accent-cyan)] font-medium">Founder & CEO</p>
              </div>
              <p className="text-gray-400 leading-relaxed">
                 Prithivi began his journey in the GeM and Government Tendering space early in his career. He faced challenges, gained valuable insights, and steadily became a subject-matter expert dedicated to simplifying the process for others.
              </p>
           </div>
        </div>

        {/* --- TEAM SECTION --- */}
        <div className="py-10">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-4">The Squad</h2>
               <p className="text-gray-500">Meet the experts behind the magic.</p>
            </div>

            {/* 🟢 MOBILE VIEW (FIXED: Image Top + Height Increased) */}
            <div className="grid grid-cols-1 gap-12 md:hidden">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
                  
                  {/* Image Area - Height 400px (h-96) & Object-Top */}
                  <div className="h-96 w-full relative shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top" 
                    />
                    {/* Dark Gradient at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000] to-transparent"></div>
                  </div>

                  {/* Text Content - Below Image */}
                  <div className="p-8 bg-[#0a0a0a] border-t border-white/10 relative -mt-2">
                    {/* Floating Number */}
                    <span className="absolute -top-8 right-8 text-7xl font-black text-white/10 drop-shadow-lg">
                      {member.id}
                    </span>

                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[var(--accent-cyan)] text-sm font-bold uppercase tracking-wider mb-4">
                      {member.role}
                    </p>
                    <div className="h-px w-20 bg-white/20 mb-4"></div>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {member.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* 🔵 DESKTOP VIEW (Expanding Gallery - No Changes) */}
            <div className="hidden md:flex flex-row gap-4 h-[500px] w-full">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onMouseEnter={() => setActiveId(member.id)}
                  className={`relative flex items-end overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700 ease-out
                    ${activeId === member.id 
                      ? 'flex-[3] grayscale-0 ring-1 ring-[var(--accent-cyan)]' 
                      : 'flex-[1] grayscale brightness-50 hover:brightness-75 border border-white/10'
                    }
                  `}
                >
                  {/* Desktop pe object-top rakha hai taaki zoom hone par bhi head dikhe */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 
                      ${activeId === member.id ? 'scale-105' : 'scale-100'} 
                    `}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${activeId === member.id ? 'opacity-80' : 'opacity-50'}`}></div>

                  <div className="relative z-10 p-8 w-full">
                    <div className={`text-5xl font-black mb-2 transition-all duration-500 ${activeId === member.id ? 'text-[var(--accent-cyan)] translate-y-0' : 'text-white/30 -translate-y-6 scale-75 origin-bottom-left'}`}>
                      {member.id}
                    </div>
                    <div className={`transition-all duration-500 ${activeId === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:opacity-100 lg:rotate-[-90deg] lg:origin-bottom-left lg:absolute lg:bottom-20 lg:left-8 lg:translate-y-0 lg:whitespace-nowrap'}`}>
                      <h3 className={`text-3xl font-bold text-white ${activeId !== member.id && 'lg:text-4xl tracking-widest drop-shadow-md'}`}>
                        {member.name}
                      </h3>
                      {activeId === member.id && (
                        <div className="mt-4 overflow-hidden animate-fadeIn">
                           <p className="text-[var(--accent-cyan)] font-bold uppercase tracking-wider text-sm mb-2">{member.role}</p>
                           <p className="text-gray-300 text-base leading-relaxed max-w-lg">
                             {member.desc}
                           </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default About;