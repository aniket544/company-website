import React from 'react'
import './Tp.css'
import Contact from '../Contact/Contact'


import { FaSearch, FaFileAlt, FaCheckCircle, FaCogs, FaHandsHelping, FaCrown, FaFileSignature, FaClock } from "react-icons/fa";
import HelpPopup from '../../components/HelpPopup/HelpPopup';

const Tp = () => {
  return (
    <>
      <div className="tender3-wrapper3">
        <div className="tender5-services5">
          <div className="tender2-card2">
            <FaSearch className="icon5" />
            <h4>Tender Identification</h4>
            <p>Finding the right tenders to match your business goals.</p>
          </div>
          <div className="tender2-card2">
            <FaFileAlt className="icon5" />
            <h4>Bid Preparation</h4>
            <p>Crafting compelling, compliant bids for maximum impact.</p>
          </div>
          <div className="tender2-card2">
            <FaCheckCircle className="icon5" />
            <h4>Eligibility & Compliance</h4>
            <p>Ensuring all documentation and criteria are met.</p>
          </div>
          <div className="tender2-card2">
            <FaCogs className="icon5" />
            <h4>Process Management</h4>
            <p>Streamlining timelines and requirements for smooth participation.</p>
          </div>
        </div>

        <div className="tender2-description2">
          <p>
            Participating in tenders on the Government e-Marketplace (GeM) requires more than just clicking and submitting bids;
            it demands a thorough understanding of eligibility criteria, documentation, timelines and EMD required. Our tender
            participation services offer complete end-to-end assistance, helping you identify the right tenders, prepare compelling
            bids, and ensure compliance, all while increasing your chances of winning orders.
          </p>
          <p>
            With our years of experience, tender participation can be done confidently, and you can focus on fulfilling orders while
            we manage the process efficiently.
          </p>
          <br />
          <br />
          <h2 className="tender3-heading3">Why Choose Our Tender Participation Services?</h2>
          <p className="tender3-description3">
            Our tender participation services are designed to simplify the process, ensuring you meet all requirements and deadlines while
            maximizing your chances of success. We handle everything from identifying suitable tenders to preparing and submitting bids,
            allowing you to focus on your core business operations.
          </p>
          <p className="tender3-description3">
            With our expertise, you can navigate the complexities of tender participation with ease, ensuring compliance and enhancing your
            chances of winning valuable contracts.
          </p>
        </div>

      </div>
      <br />
      <br />
      <HelpPopup/>




      <div className="subscribe-wrapperr">
        <h2 className="subscribe-titlee">Why Subscribe to Our Services?</h2>
        <div className="subscribe-gridd">
          <div className="subscribe-cardd">
            <FaHandsHelping className="subscribe-iconn" />
            <p>
              Our services offer end-to-end tender support, from tender identification to post-bid follow-ups,
              ensuring a seamless process.
            </p>
          </div>
          <div className="subscribe-cardd">
            <FaCrown className="subscribe-iconn" />
            <p>
              Our team of experts with rich experience in bid preparation and eligibility assessment
              increases your chances of winning the tenders.
            </p>
          </div>
          <div className="subscribe-cardd">
            <FaFileSignature className="subscribe-iconn" />
            <p>
              We help submit compliant bids with complete, well-organized documentation, reducing the risk of rejection.
            </p>
          </div>
          {/* <div className="subscribe-cardd">
          <FaClock className="subscribe-iconn" />
          <p>
            Time and effort savings for your business by focusing on delivering quality products and services
            while we handle the complexities of tender participation.
          </p>
        </div> */}
        </div>

      </div>
      <div id='gc2'>
        <Contact />
      </div>  

    </>
  );
};

export default Tp;

