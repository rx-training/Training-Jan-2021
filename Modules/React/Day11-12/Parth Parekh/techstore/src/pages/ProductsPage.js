import React from "react";
import Products from "../components/ProductPage/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";
export default function ProductsPage() {
    return (
        <>
            <Hero img={productsBcg}></Hero>
            <Products />
        </>
    );
}
