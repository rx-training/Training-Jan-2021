import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../img/redbus-logo.png'
import { BiUserCircle } from 'react-icons/bi'
import { LoginModel, OtpModel, SignUpModel } from './Model'
import { RedbusConsumer } from '../../context/context'



const Navbar = () => {


   return (
      <div className="navbar bg-theme navbar-dark fixed-top navbar-expand-md ">
         <RedbusConsumer>
            {value => {
               const {
                  login,
                  isLogin,
                  isSignup,
                  isOtp,
                  loginModelOpen,
                  loginModelClose,
                  signUpModelOpen,
                  signUpModelClose,
                  otpModelOpen,
                  otpModelClose,
                  handleLogout
               } = value
               return (
               <>
                  <Link to='/' className="navbar-brand" >
                     <img src={logo} alt="" />
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                        <li >
                           <Link to="/" className="nav-link active" >bus tickets</Link>
                        </li>
                        <li >
                           <Link to="#" className="nav-link pool" >rPool <sup>New</sup> </Link>
                        </li>
                        <li >
                           <Link to="#" className="nav-link" >bus hire</Link>
                        </li>
                     </ul>

                     <ul className="navbar-nav ml-auto">
                        <li >
                           <Link to="#" className="nav-link" >help</Link>
                        </li>
                        <li className="dropdown">
                           <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" >manage booking </Link>
                           <div className="dropdown-menu" id="dd-menu">
                              {/* <a href="#" className="dropdown-item ">Bus tickets</a>
                              <a href="#" className="dropdown-item">Cancel</a>
                              <a href="#" className="dropdown-item">Reshedule</a>
                              <a href="#" className="dropdown-item">Show my ticket</a>
                              <a href="#" className="dropdown-item">Email/SMS</a> */}
                           </div>
                        </li>
                        <li className="dropdown">
                           <Link to="#" className="nav-link" data-toggle="dropdown"><BiUserCircle className="user-icon"   /></Link>
                           <div className="dropdown-menu dropdown-menu-right mr-0">
                              <ul className="text-center list-unstyled">
                                 {
                                    login ?<> 
                                             <li className=""   >
                                                <Link to="/user/profile" className="link" >Profile</Link>
                                                </li>
                                             <li className="" onClick={handleLogout}  >logout</li>
                                          </>
                                    : <li className="" onClick={loginModelOpen}  >Log-in/sign up</li>
                                 }
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </div>
                                 
                  <LoginModel  isOpen = {isLogin} closeModal={loginModelClose} openOther={signUpModelOpen} /> 
                  <SignUpModel  isOpen = {isSignup} closeModal={signUpModelClose} openOther={loginModelOpen} openOtp = {otpModelOpen}  />
                  <OtpModel isOpen = {isOtp} closeModal={otpModelClose} />
               </>
               )
            }}
         </RedbusConsumer>
         
      </div>
   )
}


export default withRouter(Navbar)