import React from 'react'
export const OfferComponent = ({head,img,footer}) => {
   return (
      <div className="coupan my-2">
         <h6 className="coupan-title">{head}</h6>
         <img src={img} alt="" className="img-fluid"/>
         <h6 className="coupan-title">{footer}</h6>
      </div>
   )
}
