import React from 'react'
import { Title } from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'


export const Info = () => {
   return (
      <section className="py-5">
         <div className="container">
            <div className="row">
               <div className="col-10 mx-auto col-md-6 my-3">
                  <img 
                     src={aboutBcg} 
                     alt="about company" 
                     className="img-fluid img-thumbnail" 
                     style={{background : "var(--darkGrey)"}}
                  />
               </div>
               <div className="col-10 mx-auto col-md-6 my-3">
                  <Title title='about us'  />
                  <p className="text-lead text-muted my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quasi, accusamus error nisi reiciendis distinctio vel repellendus eos iusto iure.</p>
                  <p className="text-lead text-muted my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quasi, accusamus error nisi reiciendis distinctio vel repellendus eos iusto iure.</p>
                  <button 
                     className="main-link" 
                     type="button"
                     style={{marginTop : "2rem"}}
                  >MOre info</button>
               </div>
            </div>
         </div>
      </section >
   )
}
