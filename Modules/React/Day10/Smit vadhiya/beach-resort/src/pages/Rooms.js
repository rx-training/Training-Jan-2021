import React from 'react'
import { Banner } from '../component/Banner'
import { Hero } from '../component/Hero'
import { Link } from 'react-router-dom'
import  RoomContainer  from '../component/RoomContainer'

export const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms" > 
                    <Link to="/" className="btn-primary">
                    return home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>
    )
}
