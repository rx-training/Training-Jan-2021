import React from "react";
import { Info } from "../components/AboutPage/Info";
import {Hero} from '../components/Hero'
import aboutBcg from '../images/aboutBcg.jpeg'

export default function AboutPage() {
  return (
    <>
    <Hero img={aboutBcg}  >
      <h1 className="text-uppercase"></h1>
    </Hero>
    <Info />
      <h1>Hello From About Page</h1>
    </>
  );
}
