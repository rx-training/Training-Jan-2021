import React from 'react'
import {FaBars, FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer } from '../context/context'
import logo from '../images/logo.svg'

export const Navbar = () => {
   
   return (
      <div>
         <ProductConsumer >
            {value => {
               const {handleSidebar, handleCart, cartItems} = value
               return (
                  <NavWrapper >
                     <div className="nav-center">
                        <FaBars className="nav-icon" onClick={handleSidebar}></FaBars>
                        <img src={logo} alt="tech store logo" />
                        <div className="nav-cart">
                           <FaCartPlus className="nav-icon" onClick={handleCart}></FaCartPlus>
                           <div className="cart-items">
                              {cartItems}
                           </div>
                        </div>
                     </div>
                  </NavWrapper>
               )
            }}
         </ProductConsumer>
      </div>
   )
}


const NavWrapper = styled.nav`
   position : -webkit-sticky;
   

`
