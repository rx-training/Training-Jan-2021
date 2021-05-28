import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../component/Banner'
import FeaturedRooms from '../component/FeaturedRooms'
import { Hero } from '../component/Hero'
import Services from '../component/Services'



export const Home = () => {
    return (
        <>
            <Hero >
                <Banner title ="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}
