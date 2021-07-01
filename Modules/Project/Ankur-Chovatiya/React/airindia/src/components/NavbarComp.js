import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import ind from '../img/ind-flag.png'
import logo from '../img/Airindia.png'
import starlogo from '../img/star.png'
import {FaUserLock} from 'react-icons/fa'


function NavbarComp(props) {

  const [isLogin , setIsLogin] = useState('')

  useEffect(() =>{
    // console.log('hi');
      
      if(localStorage.isLogin === "true"){
        setIsLogin(true)
        
      }
      else{
        setIsLogin(false)
      }

  },[])

  // console.log(isLogin);
  console.log(props);
  const handleLogout = () => {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('token')
    // props.history.push('./login')
    window.location.replace('http://localhost:3000')
    // window.location.reload()
    
  }

  return (
    <>
    <div className="header">
        <div className="row mt-2">
          <div className="col-3"></div>
          <div className="col-6 ">
            <div className="form-group row">
              <label className="mt-3">TOLL NO : -</label>
              <div className="col-8 mt-3">
                <select className="form-control" placeholder="CONTACT US">
                  <option selected>CONTACT US</option>
                  <option>For Call When IN India :-  1860 233 1407/1547 654 4825</option>
                  <option>For Call When IN Austraila :-  613 701 98504</option>
                  <option>For Call When IN France :-  331 547 02547</option>
                  <option>For Call When IN Fermany :-  495925511337</option>
                </select>
              </div>
              <div>
              <img src={ind}  alt="ind"/> - EN
              <span className="search-icon"> <FiSearch></FiSearch></span>
              </div>
             
             </div>
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row logos">
          <div className="col-3 logo-1">
              <img  src={logo} />
          </div>
          <div className="col-4 logo-2">
              <img src={starlogo} />
          </div>
          <div className="col-3 login-enroll">
             <p className="link text-start"> <FaUserLock></FaUserLock><a href="/login"> Login </a>|<a href="/Register"> Enroll</a></p>
          </div>
        </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/AirIndia"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-5" id="navLinks">
      <li className="nav-item active ml-4">
       { isLogin ? <a className="nav-link" href="/AirIndia">Home </a> :
        <a className="nav-link" href="/login">Home </a>}
      </li>
      <li className="nav-item active ml-4">
        <a className="nav-link" href="/special-offers">Special Offers </a>
      </li>
      <li className="nav-item active ml-4">
        <a className="nav-link" href="/contact">Contact </a>
      </li>
      <li className="nav-item active ml-4">
        <a className="nav-link" href="/GST">GST </a>
      </li>
      <li className="nav-item active ml-4">
      { isLogin ?  <a className="nav-link " style={{cursor:"pointer"}}  onClick={handleLogout}>Logout</a>  :
          <a className="nav-link" href="/login">Login</a>
      }
      </li>
      
    </ul>
  </div>
</nav>
  </>
  )
}

export default NavbarComp
