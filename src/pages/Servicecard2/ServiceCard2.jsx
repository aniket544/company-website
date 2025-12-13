import React from "react"
import "./servicecard2.css"
function ServiceCard2({ image,description,title}) {

    return (
        <>
            <div className="service-card2">
                <h3>{title}</h3>
                <p>{description}</p>
                <img className="haha" src={image}  />
            </div>
        </>

    )
}

export default ServiceCard2
