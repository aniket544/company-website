import React from "react"
import './Home.css'
import logo from '../../assets/logo_ov2.0.png'
import und from '../../assets/WTD2.png'
import { Typewriter } from 'react-simple-typewriter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Card2 from '../../components/Card/Card2'
import Gem from '../../components/Gem/GeM'
import wtd from "../../assets/WTD.png"
import wt3 from '../../assets/WTD3.png'
import ServiceCard from '../ServiceCard/ServiceCard'
import StepCard from '../StepCard/StepCard'
import Footer from '../Footer/Footer'
import dip from '../../assets/DPIIT_LOGO2.png'
import cpp from '../../assets/CPPP_LOGO2.png'
import ServiceCard2 from '../Servicecard2/ServiceCard2'
import Project from '../Project/Project'
import gem from '../../assets/GEM_LOGO2.png'
import ire from '../../assets/IREPS_LOGO2.png'
import SimpleImageSlider from "react-simple-image-slider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FlowingMenu from '../../components/Marque/FlowingMenu'
import PricingSection from '../../components/PricingSection/PricingSection'
import Vision from "../../components/vision/Vision"

// ✅ IMPORTS for UI Effects
import { GridBackground } from "../../components/UI/GridBackground";
import { ScrollReveal } from "../../components/UI/ScrollReveal";

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline()
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    })
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    })
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    })
    gsap.from(".righthome img", {
      x: 200,
      duration: 2.5,
      opacity: 0,
    })

  });


  const services = [
    {
      icon: '🛒',
      title: 'GeM Portal Services',
      description: 'Expert assistance with GeM registration and product listings.',
    },
    {
      icon: '🤝',
      title: 'Tender Support',
      description: 'Guidance in identifying and securing government tenders.',
    },
    {
      icon: '🎓',
      title: 'OEM Vendor Assessment',
      description: 'End-to-end OEM vendor assessments focused on quality, compliance, and capability evaluation.',
    },
    {
      icon: '📊',
      title: 'Tender Insights',
      description: 'In-depth analysis to inform successful bidding strategies.',
    },

  ];
  const steps = [
    {
      id: 1,
      icon2: '📄',
      title2: 'Identify Appropriate Opportunities',
      description2: 'We help you identify the most relevant and profitable tenders that perfectly align with your business strengths and capabilities.',
    },
    {
      id: 2,
      icon2: '🛡️',
      title2: 'Review Tender Requirements',
      description2: 'Our dedicated experts conduct a thorough review of tender requirements to ensure your submission is both fully compliant and highly competitive.',
    },
    {
      id: 3,
      icon2: '📊',
      title2: 'Preparatory Work',
      description2: 'We assist in the collection and organization of all necessary documents and information required for a successful bid submission.',
    },
    {
      id: 4,
      icon2: '✅',
      title2: 'Quality Control',
      description2: 'Our team performs checks to ensure that all responses meet the highest standards and comply with regulations.',
    },
    {
      id: 5,
      icon2: '📤',
      title2: 'Tender Submission',
      description2: 'We manage the entire tender submission process on your behalf, ensuring both timely and precise delivery.',
    },
    {
      id: 6,
      icon2: '🤝',
      title2: 'Post-Submission Support',
      description2: 'We continue supporting you by addressing queries and keeping you informed about the status of your tender.',
    },

  ];
  const images = [
    { url: "images/1.png" },
    { url: "images/2.png" },
    { url: "images/3.png" },
    { url: "images/4.png" },
    { url: "images/5.png" },
    { url: "images/6.png" },

  ];


  return (
    <>
      {/* Hero Section (No ScrollReveal needed here as it's visible on load) */}
      <GridBackground>
        <div id='home' className="w-full h-full flex justify-between items-center px-4 md:px-20 relative z-20" style={{ background: 'transparent' }}>
          
          <div className="lefthome">
            <div className="homedetails">
              <div className="line1">We're</div>
              <div className="line2"> Ovin Enterprises</div>
              <div className="line3">
                <Typewriter
                  words={["GeM Consultant Services", "Tender Management Services", "Vendor Assessment", "Bidding Services"]}
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  loop={true}
                  cursorStyle=''
                />
              </div>
              <button onClick={() => window.location.href = '/contact'}>Contact Us</button>
            </div>
          </div>

          <div className="righthome">
            <img src={logo} alt="Ovin Logo" />
          </div>

        </div>
      </GridBackground>

      {/* ✅ Wrapped Sections with ScrollReveal */}
      
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <div className="app-container">
          <div className="card-wrapper">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="vision">
          <Vision/>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className='gov'>Government Portal</div>
      </ScrollReveal>
      
      <ScrollReveal>
        <FlowingMenu />
      </ScrollReveal>

      <ScrollReveal>
        <Gem />
      </ScrollReveal>

      <ScrollReveal>
        <div id='about'>
          <div className='left'>
            <Card2 title="Python" image={wtd} className="yoyo" />
            <Card2 title="mysql" image={wt3} className="kkkk" />
          </div>

          <div className="leftabout" id='mid'>
            <div className="circle-line">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>
          
          <div className="rightabout">
            <Card2 title="MySql" image={und} />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="app2-container2">
          <h3 className="section-subtitle">Tender</h3>
          <h1 className="section-title">Process for Tender Submission</h1>
          <p className="section-desc">
            Being eligible isn't enough to win a government contract! You need a strategic approach, an experienced team, and a solid execution plan to overcome the challenges in your way.
          </p>

          <div className="steps-grid">
            {steps.map((step) => (
              <StepCard key={step.id} {...step} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div className="clients">
          <Project />
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div className="slider2">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
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
      </ScrollReveal>

      <br />
      <br />
      <Footer />
    </>
  )
}

export default Home