import React from "react";
import { Contact } from "../components/contactPage/Contact";
import {Hero} from '../components/Hero'
import contactImg from '../images/contactBcg.jpeg'

export default function ContactPage() {
return (
   <>
      <Hero img={contactImg} />
      <Contact />
   </>
);
}
