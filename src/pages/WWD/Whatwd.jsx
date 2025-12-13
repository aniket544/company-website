import './wwd.css'
import F from '../../assets/F.png'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Wwd from '../../assets/Wwd.png'
import W9 from '../../assets/W9.jpg'
import Tenders from '../../components/Tcard/Tenders'
import W11 from '../../assets/W11.jpg'
import W12 from '../../assets/W12.jpg'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function wwd() {
  return (
    <>
      <div className='d1'>
        <div className='IMAZE'>
          <img src={F} id='F' />
        </div>
        <div className='HEA'>
          <div className='typ'>
            <Typewriter
              words={["Grow Your Business With Us", "Unlock Your Tender Opportunity", "Extend Your Government Sales"]}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              loop={true}
              cursorStyle=''
            />
          </div>
          <p>We provide strategic services for expend your </p>
          <p>sales using of GeM, CPPP, E-tender Opportunity</p>
          <div id='muzan'>
            <div className='typ'>
              <Typewriter
                words={["AI Driven Tenders", "Automatic Tender Maker", "Unlocking Tender Success with AI", "Transforming Tenders with AI Precision"]}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                loop={true}
                cursorStyle=''
              />
            </div>

            <p>Error-Free, On Time, Every Time</p>
          </div>
        </div>
        <div id='t1'>
          <div className='A1'>
            <h1>What We Do</h1>
            <div className='PP'>
              <div className='beech'>
                <div className='bye'>
                  <h1 id='tanjiro'>Company's Aim</h1>
                  <p id='op'>At Ovin Enterprises, we specialize in Business Development for Government Sales. We help companies grow their presence in public procurement by offering:</p>
                  <ul>
                    <li>📌 Direct Order Generation</li>
                    <li>📌 Tender Participation Management</li>
                    <li>📌 Software-Driven Procurement Intelligence</li>
                  </ul>
                </div>
                <div className='dye'>
                  <img src={Wwd} />
                </div>
              </div>
              <div className='beech2'>
                <div className='dye2'>
                  <img src={W9} />
                </div>
                <div className='bye2'>
                  <h1 id='tanjiro2'>Direct Order Management</h1>
                  <p>We help clients secure direct government orders, particularly via GeM and other departmental procurement systems:
                    <ul id='u4'>
                      <li>GeM profile creation & optimization</li>
                      <li>Strategic listing of products/services</li>
                      <li>Handling buyer enquiries and negotiations</li>
                      <li>Order closure support with full documentation</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className='beech3'>
                <div className='bye3'>
                  <h1 id='tanjiro'>Tender Participation & Bid Management</h1>
                  <p>Order closure support with full documentation:</p>
                  <ul id='u5'>
                    <li>Tender Identification & Review: Locate relevant government tenders on official portals and assess eligibility, scope, and deadlines.</li>
                    <li>Bid Preparation & Submission: Prepare a compliant proposal with all required documents and submit it on time, including any necessary fees or deposits.</li>
                    <li>Evaluation & Award: The procuring agency evaluates bids and awards the contract to the most qualified and compliant bidder.</li>
                  </ul>
                </div>
                <div className='dye3'>
                  <img src={W11} />
                </div>
              </div>
              <div className='beech2'>
                <div className='dye4'>
                  <img src={W12} />
                </div>
                <div className='bye4'>
                  <h1 id='tanjiro2'>Software-Driven Execution</h1>
                  <p>We help clients secure direct government orders, particularly via GeM and other departmental procurement systems:
                    <ul id='u7'>
                      <li>GeM profile creation & optimization</li>
                      <li>Strategic listing of products/services</li>
                      <li>Handling buyer enquiries and negotiations</li>
                      <li>Order closure support with full documentation</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div>

          </div>
          <div className='TEN'>
            < Tenders />
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default wwd
