import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
export default function CartPage() {
    return (
        <>
            <Hero img={cartBcg} />
            <CartSection />
            <h1>Hello From Cart Page</h1>
        </>
    );
}
