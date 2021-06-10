import React from 'react'
import safetyImg from '../../../img/SaftySection.png'

export const Safety = () => {
   return (
      <div class="container border my-5" id="saftyintro">
         <div class="row">
               <div class="col-12 col-md-1 px-0 py-4  text-center">
                  <img src={safetyImg} alt="" class="img-fluid"/>
               </div>
               <div class="col-12 col-md-11 p-4 ">

               <h2 class="text-dark">Introducing Safety+</h2>
               <p class="text-muted">Opt to Travel Safe with redBus <a href="#">KNOW MORE</a></p>
               <p class="my-4 lead"> <i class="fa fa-lightbulb-o  text-warning"></i> Look for buses with <i class="fa fa-shield"></i> <strong className="h6">Safety+</strong> tag while booking your journey</p>
               <div class="row mr-5">
                  <div class="col-12 col-md-4 ">
                        <h5 class="text-primary">Sanitized Bus</h5>
                        <p class="">All Safety+ buses are sanitized and disinfected before and after every trip.</p>
                  </div>
                  <div class="col-12 col-md-4 ">
                        <h5 class="text-primary">Mandatory masks</h5>
                        <p class="">Proper masks are mandatory for all passengers and bus staff.</p>
                  </div>
                  <div class="col-12 col-md-4 ">
                        <h5 class="text-primary">Thermal Screening</h5>
                        <p class="">All passengers will undergo thermal screening. Temperature checks for bus drivers and service staff are done before every trip.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   
         
   )
}
