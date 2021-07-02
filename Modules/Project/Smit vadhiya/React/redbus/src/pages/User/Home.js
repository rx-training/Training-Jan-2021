import React, { useContext } from 'react'
import  Head  from '../../components/Users/HomePage/Head'
import { OfferComponent } from '../../components/Users/HomePage/OfferComponent'
import {coupanData} from '../../RowData/Coupans'
import { Safety } from '../../components/Users/HomePage/Safety'
import {RedbusContext} from '../../context/context'
import  {Example} from '../../components/Auto'


export const Home = () => {
   
   const values = useContext(RedbusContext)

   return (
      <div >
         {/* MAIN HEADER */}
         <Head  />


         {/* COUPANS */}
         <div className="bg-light py-5">
            <div className="container">
               <div className="d-flex px-3  bg-light flex-wrap justify-content-around">
                  {coupanData.map((item) => <OfferComponent key={item.id} {...item} /> )}
               </div>
            </div>
         </div>

         {/* SAFETY */}

         <Safety />

         {/* <div className="safety p-5 m-4">
            <div className="container ">
               <div className="d-flex">
                  <div className="cotext-center p-3">
                     <img src={safetyImg} alt="" className="img-fluid " />
                  </div>
                  <div className=" my-2" >
                     <h2>Safety+</h2>
                     <h3 className="lead">Opt to Travel Safe with redBus <span className="text-primary h6">KNOW MORE</span> </h3>
                  </div>
               </div>
            </div>
         </div> */}


      </div>
   )
}
