import React from 'react';
import './Gr.css';
import Contact from '../Contact/Contact'
import HelpPopup from '../../components/HelpPopup/HelpPopup'

function Gr() {
  return (
<>
    <div className="gem-container">
      {/* Section 1: Overview */}
      <h1>GeM Registration Overview</h1>
      <p>
        The <a href="#">Government e-Marketplace (GeM)</a> is an innovative digital platform designed to streamline and modernize the public procurement process in India. 
        Launched by the Government of India, GeM connects buyers and sellers on a unified portal, making the entire purchasing process efficient, transparent, and cost-effective. 
        It is the go-to platform for government departments, ministries, and public sector undertakings (PSUs) to procure goods and services directly from registered sellers.
      </p>

      {/* Section 2: Why Register */}
      <h2>Why Register on GeM?</h2>
      <p>
        Whether you are a buyer from a government organization or a seller offering goods and services, registering on the GeM platform offers numerous advantages:
      </p>

      <h3>Benefits of GeM Portal</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>For Buyers</th>
              <th>For Sellers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Wide Range of Products and Services:</strong> Access a vast catalog of products, ranging from office supplies to complex IT services, all in one place.</td>
              <td><strong>Direct Access to Government Buyers:</strong> By registering on GeM, sellers gain direct exposure to a massive base of government buyers across India, unlocking new business opportunities.</td>
            </tr>
            <tr>
              <td><strong>Transparent Procurement:</strong> GeM ensures a transparent, automated procurement process with minimal manual intervention, reducing the risk of delays and errors.</td>
              <td><strong>Fair and Transparent Sales Channel:</strong> The platform's automated, rule-based system ensures a level playing field for all sellers, making it easier for small businesses to compete.</td>
            </tr>
            <tr>
              <td><strong>Competitive Pricing:</strong> The platform's open marketplace fosters healthy competition among sellers, ensuring buyers get the best value for their budget.</td>
              <td><strong>Efficient Payment Processing:</strong> Sellers benefit from GeM's commitment to timely payments, typically processed within 10 days of order acceptance, ensuring better cash flow.</td>
            </tr>
            <tr>
              <td><strong>Quick Procurement & Payments:</strong> The streamlined order and payment process enable government buyers to procure items quickly, with timely payments to suppliers.</td>
              <td><strong>No Registration Fees:</strong> Joining the GeM portal is free, allowing sellers of all sizes—especially MSMEs and startups—to participate without upfront costs.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />

      {/* Section 3: Who Should Register */}
      <h2>Who Should Register on GeM?</h2>
      <p>
        Anyone can register, but individuals and businesses who are interested in doing business with government departments must register to expand their business horizons.
      </p>

      <ul className="bullet-list">
        <li><strong>Government Buyers:</strong> Ministries, departments, PSUs, and autonomous bodies looking to procure goods and services in a transparent, efficient manner.</li>
        <li><strong>Manufacturers & Suppliers:</strong> Offering products like IT hardware, office equipment, medical supplies, and more.</li>
        <li><strong>Service Providers:</strong> Providing consulting, training, logistics, IT services, maintenance, and other professional services.</li>
        <li><strong>MSMEs & Startups:</strong> The GeM platform actively encourages Micro, Small, and Medium Enterprises (MSMEs) and startups to participate, supporting their growth through government contracts.</li>
        <li><strong>Non-Profits & NGOs:</strong> Organizations looking to supply products or services for government projects and social initiatives.</li>
      </ul>

      <p>
        By registering on GeM, both buyers and sellers can streamline their procurement and sales processes, gain access to a vast network of trusted partners, and contribute to the growth of India's digital economy.
      </p>
      <br />
      <br />
      <br />


      {/* Section 4: Documents Required */}
      <h2>Documents Required for GeM Portal Registration</h2>
      <ul className="document-list">
        <li><strong>Aadhaar Card:</strong> Aadhaar card linked to an active mobile number (for OTP verification).</li>
        <li><strong>PAN Card:</strong>
          <ul>
            <li>Personal PAN (for individuals and sole proprietors)</li>
            <li>Business PAN (for companies, firms, LLPs, etc.)</li>
            <li>Business Registration Certificate</li>
          </ul>
        </li>
        <li><strong>Sole Proprietorship:</strong> Shop Establishment Certificate or GST Registration.</li>
        <li><strong>Partnership Firm:</strong> Partnership Deed.</li>
        <li><strong>Limited Liability Partnership (LLP):</strong> LLP Agreement and Certificate of Incorporation.</li>
        <li><strong>Private Limited Company:</strong> Certificate of Incorporation, Memorandum of Association (MoA), and Articles of Association (AoA).</li>
        <li><strong>Trusts/Societies:</strong> Registration Certificate.</li>
        <li><strong>Udyog Aadhaar/Udyam Registration (for MSMEs):</strong>
          <ul>
            <li>Udyog Aadhaar or Udyam Registration Number.</li>
            <li>Mobile number linked to Udyam registration.</li>
          </ul>
        </li>
        <li><strong>GST Registration Certificate:</strong> Valid GSTIN (except for businesses exempted from GST).</li>
        <li><strong>Bank Account Details:</strong>
          <ul>
            <li>Bank Account Number</li>
            <li>IFSC Code</li>
            <li>Branch Name</li>
            <li>Cancelled cheque or recent bank statement</li>
          </ul>
        </li>
        <li><strong>Address Proof:</strong>
          <ul>
            <li>Electricity Bill</li>
            <li>Telephone Bill</li>
            <li>Lease/Rental Agreement</li>
            <li>Property Tax Receipt</li>
          </ul>
        </li>
      </ul>

      <p><strong>Income Tax Return (ITR):</strong> Latest ITR Form and acknowledgment for businesses (especially those established for more than 24 months). Not mandatory for businesses less than two years old or exempt from filing ITR.</p>
      <p>Ensure all documents are accurate and up-to-date to facilitate a smooth registration process on the GeM portal.</p>
      <p><a href="#">Documents required for GeM Seller Registration</a></p>
      <br />
      <br />
      <br />
       {/* SECTION 3: How We Help */}
       <HelpPopup/>
      <section className="gem-section">
        <h2>How We Help You Register on GeM</h2>
        <p>
          Navigating the GeM registration process can be complex. At Bidz365, we make it efficient and stress-free.
        </p>
        <h4>Expert Consultation & Initial Assessment</h4>
        <p>
          We understand your business needs and assess eligibility for GeM registration.
        </p>
        <h4>Document Preparation & Verification</h4>
        <p>
          We help you collect, prepare, and verify documents like PAN, GST, and Udyog Aadhaar.
        </p>
        <h4>Seamless Profile Creation & Caution Money Assistance</h4>
        <p>
          We set up your profile and assist in depositing caution money to activate your account swiftly.
        </p>
        <h4>Profile Optimization for Maximum Visibility</h4>
        <p>
          We help optimize your profile with a strong product catalog and strategic pricing.
        </p>
        <h4>Ongoing Support & Compliance Management</h4>
        <p>
          We assist with platform navigation, order response, and keeping you compliant with GeM policies.
        </p>
      </section>
    </div>
    <br/>
    <br/>
    <br/>
    <Contact/>
    
    </>
  );
}

export default Gr;
