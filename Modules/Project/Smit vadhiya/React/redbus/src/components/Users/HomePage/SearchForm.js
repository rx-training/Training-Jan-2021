import React, { useState }  from 'react'
import {GiModernCity} from 'react-icons/gi'
import {MdDateRange} from 'react-icons/md'
import { withRouter } from 'react-router';
import {RedbusConsumer} from '../../../context/context'

const SearchForm = () => { 
      return(
            <div className="">
               <RedbusConsumer>
                  {value => {
                     const {fromCity,toCity,date,handleChange,handleSearch} = value
                     return (
                        
                     <form action="" onSubmit={(e) => handleSearch(e)} >
                        <div className="container">
                           <div className="row no-gutters mx-auto">
                              <div className="col-6 col-md-3 mx-auto">
                                 <div className="input-group border">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text "><GiModernCity /></span>
                                    </div>                           
                                    <input 
                                       type="text" 
                                       className="form-control" 
                                       name="fromCity"
                                       placeholder="FROM"
                                       value={fromCity}
                                       onChange={handleChange}
                                       required
                                    />
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mx-auto">
                                 <div className="input-group border">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text ">
                                          <GiModernCity />
                                       </span>
                                    </div>                           
                                    <input 
                                       type="text" 
                                       className="form-control" 
                                       name="toCity"
                                       placeholder="TO"
                                       value={toCity}
                                       onChange={handleChange}
                                       required
                                    />
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mx-auto">
                                 <div className="input-group border">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text "><MdDateRange /></span>
                                    </div>                           
                                    <input 
                                       type="date"
                                       className="form-control" 
                                       min={new Date().toISOString().split('T')[0]}
                                       name="date"
                                       value={date}
                                       onChange={handleChange}
                                       required
                                    />
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mx-auto">
                                 <input 
                                    type="submit" 
                                    className="btn btn-theme h-100 w-100" 
                                    value="search buses" 
                                 />
                              </div>

                           </div>
                        </div>
                     </form>
                     )
                  }}
               </RedbusConsumer>
            </div>
      )
}

export default withRouter(SearchForm)