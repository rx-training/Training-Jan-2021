import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeaturedRoom from '../components/FeaturedRoom'
import Hero from '../components/Hero'
import Services from '../components/Services'
// import StyledHero from '../components/StyledHero'
function Home() {
    return (
    <>
          <Hero>
              <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">Our rooms</Link>
              </Banner>
          </Hero>
          <Services></Services>
          <FeaturedRoom></FeaturedRoom>
          
    </>
    )
}

export default Home
