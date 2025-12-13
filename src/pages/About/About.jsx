import React from 'react';
import DarkVeil from './DarkVeil';
// ← Your silk shader
import MagicBento from './MagicBento';
import founder from '../../assets/Founder.jpg';
import Footer from '../Footer/Footer';
import emp6 from '../../assets/emp6.png';
import emp2 from '../../assets/emp2.png';
import emp1 from '../../assets/emp1.png';
import emp4 from '../../assets/heryu.png';
import Profile from '../../components/Profile/Profile.jsx';
import './About.css';
import Silk from '../../components/Silk.jsx';


function About() {
  return (
    <>
      {/* FULL PAGE: Your original flowing DarkVeil (kept exactly as before) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -10 }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0.03}
          speed={0.4}
          scanlineFrequency={800}
          warpAmount={0.15}
        />
      </div>

      {/* MagicBento Section - On top of DarkVeil */}
      <div className="magic">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="107, 211, 211"   // Perfect cyan match
        />
      </div>

      {/* ABOUT SECTION - Silk background ONLY here */}
      <div className="about-container" style={{ position: 'relative' }}>
        {/* Silk Background - Only for this section */}
        <div style={{
          position: 'absolute',
          top: -100,
          left: -100,
          right: -100,
          bottom: -100,
          zIndex: -1,
          overflow: 'hidden',
          borderRadius: '20px',
          width: '1580px',
        }}>
          <Silk />
        </div>
        <h2>About Ovin - Ovin Enterprises Pvt. Ltd.</h2>
        <ul>
          <li>Ovin is a passionate team of experts focused on government tendering services.</li>
          <li>We handle tasks like profile creation, vendor assessment,
             documentation, formal submission, and post-submission support.</li>
          <li>Our goal is to provide high-quality, end-to-end tender submission and management services.</li>
          <li>We operate with the ideology: <strong>"Your Growth is Our Growth."</strong></li>
        </ul>
        {/* ... rest of your <ul> blocks ... */}
        <ul>
          <li>We offer training workshops to help sellers and buyers confidently use the GeM portal.</li>
          <li>Support extends beyond documents and tools — we ensure seamless experience and higher bidding success rate on GeM.</li>
        </ul>
        <ul>
          <li>Our team pioneers in this space — beyond tenders, we boost your brand presence and market reputation.</li>
          <li>We focus on public awareness and business promotion through our expertise.</li>
        </ul>

        <h3>Our Mission</h3>
        <ul>
          <li>Empower businesses of all sizes — from startups to SMEs and established companies — to win dream projects.</li>
          <li>Simplify tender submission and government project acquisition.</li>
          <li>Eliminate errors and discrepancies during the process.</li>
          <li>Improve market reputation and offer consistent support.</li>
          <li>Guide clients through every step with education and confidence.</li>
          <li>Help clients stand out in the competitive marketplace and achieve lasting success.</li>
        </ul>

        <h3>Our Vision</h3>
        <ul>
          <li>Become the leading force in simplifying government tendering in India.</li>
          <li>Act as a bridge between businesses and government departments.</li>
          <li>Empower and educate enterprises of all sizes to navigate tenders easily and compliantly.</li>
          <li>Boost market presence and long-term success for clients.</li>
        </ul>

        <h3>Our Founder - Prithivi Sisodiya</h3>
        <div className="founder-section">
          <img src={founder} alt="Prithivi Sisodiya" className="founder-image" />
          <ul>
            <li><strong>Prithivi Sisodiya</strong> began his journey in the <strong>GeM</strong> and <strong>Government Tendering</strong> space early in his career.</li>
            <li>He faced challenges, gained valuable insights, and steadily became a subject-matter expert.</li>
            <li>To know more about his journey, please <a href="#" className="click-here">click here</a>.</li>
          </ul>
        </div>
        <h2>Our Team</h2>

        <div className='emp-cont'>



          <div className='emp-grid1'>
            <div className='emp-left'>
              <Profile  title="Sales Manager" avatarUrl={emp6} showUserInfo={true} enableTilt={true} />
            </div>
            <div className='emp-right'>
              <h2>Rupesh Kumar</h2>
              <h4>Operational Manager</h4>
              <h5>Responsibility:</h5>
              <p>Ensures the company delivers exactly what was promised in the tender</p>
              <p>on time, within cost, and profitably.</p>
            </div>
            <div id="hehe12">
              <h1>01</h1>
            </div>
          </div>





          {/* ... rest of your team grid (unchanged) ... */}
          <div className='emp-grid2'>
             <div id="hehe13">
              <h1>02</h1>
            </div>
            <div className='emp-left1'>
              <h3>Ajay Singh</h3>
              <h4>Sales Manager</h4>
              <h5>Responsibility:</h5>
              <p>The Sales Manager identifies upcoming tenders, builds long-term client/consultant relationships, influences specifications.</p>
            </div>
            <div className='emp-right1'>
              <Profile avatarUrl={emp2} />
            </div>
            
          </div>




          <div className='emp-grid3'>
            <div className='emp-left'>
              <Profile avatarUrl={emp4} />
            </div>
            <div className='emp-right'>
              <h3>Zubair Saifi</h3>
              <h4>Software Developer</h4>
              <h5>Responsibility:</h5>
              <p>A Software Developer is the technical builder and problem-solver who analyzes requirements, designs, writes, tests, debugs, and maintains clean, efficient, secure, and scalable code.</p>
            </div>
            <div id="hehe14">
              <h1>03</h1>
            </div>
          </div>



          <div className='emp-grid4'>
            <div id="hehe15">
              <h1>04</h1>
            </div>
            <div className='emp-left1'>
              <h3>Akshit Bidang</h3>
              <h4>Software Developer</h4>
              <h5>Responsibility:</h5>
              <p>A Software Developer is the technical builder and problem-solver who analyzes requirements, designs, writes, tests, debugs, and maintains clean, efficient, secure, and scalable code.</p>
            </div>
            <div className='emp-righ'>
              <Profile avatarUrl={emp1} />
            </div>
          </div>
        </div>
      </div>

      {/* TEAM SECTION - Silk background ONLY here */}
      <div className="employee-pics" style={{ position: 'relative', marginTop: '100px' }}>
        {/* Silk Background - Only for team section */}
        {/* <div style={{
          position: 'absolute',
          top: -100, left: -100, right: -100, bottom: -100,
          zIndex: -1,
          overflow: 'hidden', 
          borderRadius: '20px',
        }}>
          
        </div> */}



      </div>

      <Footer />
    </>
  );
}

export default About;