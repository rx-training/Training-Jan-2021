import React, { Component } from 'react'
import {linkData} from './linkData'
import {socialData} from './SocialData'
import { items } from './productData'

const ProductContet =  React.createContext();



class ProductProvider extends Component {
   state ={
      sidebarOpen : false,
      cartOpen : false,
      links : linkData,
      socialcons : socialData,
      cart : [],
      cartItems : 0,
      cartSubTotal : 0,
      cartTax :0,
      cartTotal : 0,
      storeProducts : [],
      filteredProduct : [],
      featuredProducts : [],
      singleProduct : {},
      loading : false
   }

   componentDidMount(){
      this.setProducts(items)
   }

   setProducts = (products) =>{
      let storeProducts = products.map(item => {
         const {id} = item.sys
         const image = item.fields.image.fields.file.url
         const product = {id,...item.fields,image}
         return product
      })
      //feature products

      let featuredProducts = storeProducts.filter(item => item.featured === true)
      this.setState({
         storeProducts,
         filteredProduct : storeProducts,
         featuredProducts,
         cart :  this.getStorageCart(),
         singleProduct : this.getStorageProduct(),
         loading: false,
         
      })
   }
   //get product from storage
   getStorageProduct = () =>{
      return {}
   }
   //get cart from storage
   getStorageCart = () =>{
      return []
   }
   //get totals
   getTotals = () => {

   }
   //add totals
   addTotals = () => {

   }

   //sync storage
   syncStorage = () => {

   }
   //add to cart
   addToCart = (id) => {
      console.log("add to cart "+id);
   }
   //set single product
   setSingleProduct=(id) =>{
      console.log("set sinfle product "+id);
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
                  closeCart : this.closeCart,
                  addToCart : this.addToCart,
                  setSingleProduct : this.setSingleProduct
               }}>
            {this.props.children}
         </ProductContet.Provider>
      )
   }
}


const ProductConsumer = ProductContet.Consumer

export {ProductConsumer, ProductProvider}
