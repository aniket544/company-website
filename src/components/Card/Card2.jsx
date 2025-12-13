import React from 'react'
import './Card2.css'

function Card2({title,img2,image}) {
  return (


   <>

    <div className='card2'>
        {/* <p>{title}</p> */}
        <img src={image} alt={title} className='imga' />
        <div className="hovercard2">
          {/* <img src={img2} alt="" />     */}
        </div>
    </div>

   </>
  )
}

export default Card2
