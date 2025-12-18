import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logo_ov2.0.png'; // Make sure logo path is correct

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div>
            <img src={logo} alt="Ovin Logo" className="h-12 mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ovin Enterprises helps businesses navigate the complexities of GeM registration, tender management, and vendor assessment with ease and expertise.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[var(--accent-cyan)] mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/bid" text="Bid Participation" />
              <FooterLink to="/payment" text="Pricing Plans" />
              <FooterLink to="/contact" text="Contact Support" />
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-bold text-[var(--accent-cyan)] mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <FooterLink to="/gr" text="GeM Registration" />
              <FooterLink to="/gc" text="GeM Consultancy" />
              <FooterLink to="/tp" text="Tender Management" />
              <FooterLink to="/va" text="Vendor Assessment" />
              <FooterLink to="/bdev" text="Business Development" />
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[var(--accent-cyan)] mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-[var(--accent-cyan)]" />
                <span>123, Business Park, Sector 62,<br />Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[var(--accent-cyan)]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[var(--accent-cyan)]" />
                <span>support@ovin.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ovin Enterprises. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Helper Components for clean code
const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-[var(--accent-cyan)] hover:text-black transition-all duration-300 cursor-pointer">
    {icon}
  </div>
);

const FooterLink = ({ to, text }) => (
  <li>
    <NavLink to={to} className="hover:text-[var(--accent-cyan)] transition-colors duration-200 block">
      {text}
    </NavLink>
  </li>
);

export default Footer;