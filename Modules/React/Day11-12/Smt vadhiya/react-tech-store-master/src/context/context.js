import React, { Component } from 'react'

const ProductContet =  React.createContext();

class ProductProvider extends Component {
   state ={
      sidebarOpen : false,
      cartOpen : false,
      cartItems : 0,
      
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
                  handleCart :this.handleCart
               }}>
            {this.props.children}
         </ProductContet.Provider>
      )
   }
}


const ProductConsumer = ProductContet.Consumer

export {ProductConsumer, ProductProvider}
