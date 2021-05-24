import React, { Component } from 'react'
import {linkData} from './linkData'
const ProductContet =  React.createContext();

class ProductProvider extends Component {
   state ={
      sidebarOpen : false,
      cartOpen : false,
      cartItems : 12,
      links : linkData,
      cart : []
   }

   handleSidebar=()=>{
      this.setState({sidebarOpen : !this.state.sidebarOpen})
   }

   handleCart=()=>{
      this.setState({cartOpen : !this.state.cartOpen})
   }

   closeCart=()=>{
      this.setState({cartOpen : false})
   }

   openCart=()=>{
      this.setState({cartOpen : true})
   }

   render() {
      return (
         <ProductContet.Provider 
               value={{
                  ...this.state,
                  handleSidebar :  this.handleSidebar,
                  handleCart :this.handleCart,
                  closeCart : this.closeCart
               }}>
            {this.props.children}
         </ProductContet.Provider>
      )
   }
}


const ProductConsumer = ProductContet.Consumer

export {ProductConsumer, ProductProvider}
