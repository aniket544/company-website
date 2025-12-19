import React from 'react'
import Card from '../../components/Card/Card'
import './Project.css';
import mini from '../../assets/mini.png';
import brand from '../../assets/brand.png';
import arc from '../../assets/Arc.png';
import vishal from '../../assets/vishal.png';
import pracxis from '../../assets/pracxis.png';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Project({title,image}) {
   useGSAP(()=>{
    gsap.from("#pera ",{
      y: 100,
      opacity: 0,
      duration: 1,
      stagger:1,
      scrollTrigger:{
        trigger: "#pera",
        scroll: "body",
        scrub: 2,
        
        start: "top 80%",
        end: "top 30%",
        
      }
    })
    gsap.from(".slider ",{
      y: 100,
      opacity: 0,
      duration: 1,
      stagger:1,
      scrollTrigger:{
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        
        start: "top 80%",
        end: "top 30%",
        
      }
    })
    


  })
  return (
    <div id='projects'>
       <h1 id='pera'>Our Clients</h1>
        <div className="slider">
            <Card title="Arc Outdoor Media Ltd." image={arc}/>
            <Card title="Vishal Craft and Interior Pvt. Ltd." image={vishal}/>
            <Card title="Branding Area" image={brand}/>
            <Card title="Pracxis Communication" image={pracxis}/>
            {/* <Card title="NEWBORN" image={newborn}/> */}
            {/* <Card title="Aryak Engineers and Consultants" image={cal}/>
            <Card title="Ms. Anjali Enterprises" image={cal}/>
            <Card title="Biocab Marketing" image={cal}/>
            <Card title="Earnika Enterprises" image={cal}/> */}
        </div>
    </div>
  )
}

export default Project