import React from 'react'
import { withRouter } from 'react-router'
import { RedbusConsumer } from '../../../context/context'
import headBcg from '../../../img/img-05.jpeg'
import  SearchForm  from './SearchForm'

const Head = () => {

   return (
      <RedbusConsumer>
            {value => {
               return(
                  <div className="home-head">

                     <div className="head-img-container" >
                        <img src={headBcg} alt="" width="100%" className="img-fluid myimg "/>
                     </div>
                     <div className="form-container w-100">
                        {value.login ? <SearchForm /> : null}
                     </div>

                     {/*  <div className="safety d-flex mx-auto align-items-center justify-content-center">
                        <div className="img-container">
                           <img src={safetyImg} alt="safety"  className="img-fluid h-100" />
                        </div>
                        <div className="safety-text">
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, assumenda.</p>
                        </div>
                        <div className="button">
                           <button className="btn btn-theme">know more</button>
                        </div>
                     </div> */}
                  </div>
               )
            }}
         </RedbusConsumer>
   )
}

export default withRouter(Head)