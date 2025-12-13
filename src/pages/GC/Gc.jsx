import React from 'react'
import './Gc.css'
import Tempo from '../../assets/TEMO1.png'
import Contact from '../Contact/Contact'
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HelpPopup from '../../components/HelpPopup/HelpPopup'


const services = [
  "GeM Seller Registration",
  "GeM Startup Registration & DPIIT Certificate Support",
  "Catalog Listing & Product Upload",
  "Bid Participation & Tender Support",
  "GeM Compliance Guidance",
  "Buyer Registration",
  "Invoice Management",
  "Vender Assessment",
  "Service List",
  "Incident Management",
  "E-Tender Services",
  "E-Procurement Registration",
  "IRPS Registration",
];
const images = [
  { url: "images/1.png" },
  { url: "images/2.png" },
  { url: "images/3.png" },
  { url: "images/4.png" },
  { url: "images/5.png" },
  { url: "images/6.png" },

];

function Gc() {
  return (
    <>
      <div className="hehe">
        <div id='gc'>
          <img src={Tempo} className='igh' />
        </div>
        <div className='aa'>
          <h1>At   Ovin, we are one of India's leading GeM Portal Consultants and Service Providers. We have a strong client presence in Delhi, Faridabad, Noida, Gurugram, and nationwide.

            We offer end-to-end GeM services to help sellers and service providers register, work, and succeed on the Government e-Marketplace (GeM) platform</h1>
        </div>
        <br />
        <br />
        <br />


         <div className="why-container">
      <h2>Why Choose Us</h2>
      <p className="sub-heading">
        We specialize in comprehensive GeM consultancy, including:
      </p>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index}>
            <FaCheckCircle className="check-icon" />
            {service}
          </li>
        ))}
      </ul>
      <p className="bottom-note">
        With experience serving 5000+ businesses, MSMEs, and government vendors,
        we help you make the best use of opportunities on GeM.
      </p>
    </div>
      </div>
      <div className="gem1-container1">
      <section id='sdd'>
        <h2>Who Can Benefit from Our GeM Services?</h2>
        <ul>
          <li>MSMEs & Startups</li>
          <li>Manufacturers & OEMs</li>
          <li>Service Providers</li>
          <li>Traders & Resellers</li>
        </ul>
      </section>

      <section id='sdd'>
        <h2>Benefits of Hiring a Professional GeM Consultant</h2>
        <ul className="benefits">
          <li>🧑‍💼 Faster and Smoother GeM Seller Registration</li>
          <li>📈 Increased Visibility for Your Products/Services</li>
          <li>💡 Bid Alerts & Strategic Participation Guidance</li>
          <li>🔍 Keyword-Rich Product Listings for Better Searchability</li>
          <li>📄 Compliance Support (GFR, DPIIT, PAN, GST, etc.)</li>
          <li>📞 Dedicated Support & Training</li>
        </ul>
      </section>

      <p className="note">
        We stay updated with the latest GeM rules, circulars, and policy changes so that you don’t have to worry about missing any compliance updates.
      </p>
    </div>
    <br />
    <br />
    <br />
     <div className="slider2">
      <HelpPopup/>
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,   // 🔥 This is the magic line
    }}
    loop={true}
    navigation
    pagination={{ clickable: true }}
    style={{ width: "896px", height: "504px" }}
  >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <img
          src={image.url}
          alt={`slide-${index}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      <div id='gc2'>
        <Contact />
      </div>
      
    </>
    
  )
}

export default Gc
