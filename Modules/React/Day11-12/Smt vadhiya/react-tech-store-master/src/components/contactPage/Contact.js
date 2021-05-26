import React from 'react'
import {Title} from '../Title'


export const Contact = () => {
   return (
      <section className="py-5">
         <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
               <Title title="contact us" />
               <form className="mt-5"
               action="https://formspree.io/f/redbusapis@gmail.com" method="POST">
               {/* first */}
                  <div className="form-group">
                     <input
                        type="text" 
                        name="firstName" 
                        className="form-control" 
                        placeholder="jhon smith"
                     />
                  </div>
               {/* email */}
                  <div className="form-group">
                     <input
                        type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="email@email.com"
                     />
                  </div>
               {/* subject */}
               <div className="form-group">
                  <input
                     type="text" 
                     name="subject" 
                     className="form-control" 
                     placeholder="important !!!"
                  />
               </div>
               {/* first */}
               <div className="form">
                  <textarea 
                     name="message" 
                     rows="10" 
                     className="form-control"
                     placeholder="hello there buddy"
                  ></textarea>
               </div>
               {/* submit */}
               <div className="form-group mt-3">
                  <input type="submit" value="Send" className="bg-primary text-white form-control" />
               </div>
               </form>
            </div>
         </div>
      </section>
   )
}
