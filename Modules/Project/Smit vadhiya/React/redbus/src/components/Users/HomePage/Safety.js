import React from 'react'
import safetyImg from '../../../img/SaftySection.png'

export const Safety = () => {
   return (
      <div className="container border my-5" id="saftyintro">
         <div className="row">
               <div className="col-12 col-md-1 px-0 py-4  text-center">
                  <img src={safetyImg} alt="" className="img-fluid"/>
               </div>
               <div className="col-12 col-md-11 p-4 ">

               <h2 className="text-dark">Introducing Safety+</h2>
               <p className="text-muted">Opt to Travel Safe with redBus <span>KNOW MORE</span></p>
               <p className="my-4 lead"> <i className="fa fa-lightbulb-o  text-warning"></i> Look for buses with <i className="fa fa-shield"></i> <strong className="h6">Safety+</strong> tag while booking your journey</p>
               <div className="row mr-5">
                  <div className="col-12 col-md-4 ">
                        <h5 className="text-primary">Sanitized Bus</h5>
                        <p className="">All Safety+ buses are sanitized and disinfected before and after every trip.</p>
                  </div>
                  <div className="col-12 col-md-4 ">
                        <h5 className="text-primary">Mandatory masks</h5>
                        <p className="">Proper masks are mandatory for all passengers and bus staff.</p>
                  </div>
                  <div className="col-12 col-md-4 ">
                        <h5 className="text-primary">Thermal Screening</h5>
                        <p className="">All passengers will undergo thermal screening. Temperature checks for bus drivers and service staff are done before every trip.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   
         
   )
}
