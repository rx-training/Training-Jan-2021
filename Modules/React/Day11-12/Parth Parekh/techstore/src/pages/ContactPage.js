import React from "react";
import Contact from "../components/ContactPage/Contact";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
export default function ContactPage() {
    return (
        <>
            <Hero img={contactBcg}></Hero>
            <Contact></Contact>
        </>
    );
}
