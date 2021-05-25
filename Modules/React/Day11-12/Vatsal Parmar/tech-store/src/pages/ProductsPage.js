import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";

function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}

export default ProductsPage;
