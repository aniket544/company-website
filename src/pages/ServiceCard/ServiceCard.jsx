import React from 'react'
import './ServiceCard.css';




function ServiceCard({ icon, title, description,image}) {

    return (
        <>
            <div className="service-card">
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <img src={image}  />
            </div>

           


        </>

    )
}

export default ServiceCard
