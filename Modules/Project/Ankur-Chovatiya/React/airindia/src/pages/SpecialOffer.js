import React from 'react'
import {FaArrowCircleRight} from 'react-icons/fa'

function SpecialOffer() {
    return (
        <>
            
            <div className="container">
                <h1>Special Offers </h1><hr />
                <div className="offer">
                    <div >
                        <img  src="./img/offer-banner.jpg" />
                    </div>

                    <div className="row my-4 offer-types">
                        <div className=" offer-type">
                            <img src="./img/offer-left.jpg" ></img>
                            <h4>International Schemes</h4><hr />
                            <p>All our current offers available at a glance</p>
                        </div>  
                        <div className=" offer-type">
                        <img src="./img/offer-right.jpg" ></img>
                            <h4>Domestic Schemes</h4><hr/>
                            <p>Concessionary Fares and more...</p>
                        </div>

                    </div><hr />

                    <div className="lists ">
                        <div className="list ">
                            <ul>
                                <a href="#"><li>get Upfront ankurankur Upgrades<span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Upgrade For Sure<span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Student Offers<span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Companion Free Schema<span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Gulf and Middle Est<span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                            </ul>
                        </div>
                        <div className="list">
                            <ul>
                                <a href="#"><li>Airport Updrades<span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Special Schemas<span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Domestic Upgared For Sure <span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Companion Schema<span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Concessionary Fare <span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>
                                <a href="#"><li>Bussiness Class Fare <span><FaArrowCircleRight></FaArrowCircleRight></span></li></a>

                            </ul>
                        </div>
                    </div><hr />

                    <div className="house row my-5">
                        <div className="col-9">
                            <img  src="./img/offer-last.jpg" />
                            <h4>Corporate Houses</h4><hr />
                            <p>Special offers and services to our corporate clients.</p>
                            <p>View More<span><FaArrowCircleRight></FaArrowCircleRight></span></p>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialOffer
