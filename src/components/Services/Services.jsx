import React from 'react'
import './Services.css'
import DarkVeil from '../../pages/About/DarkVeil'
import Footer from '../../pages/Footer/Footer'
import PricinngSection from '../../components/PricingSection/PricingSection'
import MagicBento2 from './MagicBento2'
import GeM from '../Gem/GeM'

function Services() {
    return (
        <>
            <div id='dark' style={{ width: '100%', height: '600px', }}>
                <DarkVeil />
            </div>

            <div className='ha' >
                <MagicBento2 />

            </div>
            <div className='pri'>
                <PricinngSection />
            </div>
            <br />
            <div id='gem1'>
                <GeM />
            </div>
            <br />
            <br />
            <br />
            <Footer />

        </>
    )
}

export default Services