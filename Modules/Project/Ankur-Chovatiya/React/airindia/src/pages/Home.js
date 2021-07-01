import React, { useEffect } from 'react'
import FlightSearchForm from '../components/FlightSearchForm'
import {MdAirlineSeatReclineNormal} from 'react-icons/md'
import {IoMdCheckboxOutline} from 'react-icons/io'

function Home(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    console.log(props);
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="./img/slide.jpeg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src="./img/slide-1.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src="./img/slide-2.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
        </div>

        <div id="mainForm">
            <FlightSearchForm {...props}></FlightSearchForm>
            </div>
         
                   <div className="row headlines">
                       <marquee>Entry Guidelines for all passengers traveling to UK.KNOW MORE. |It is mandatory to carry a negative RT-PCR test report with QR code for international travel ex India effective 22nd May 2021.KNOW MORE. |It is mandatory for all passengers to wear mask,ensure hand hygiene and maintain social distancing at all times during air travel .KNOW MORE.</marquee>
                    </div> 

                <div className="row options">
                    <div className="col-md-6 col-lg-4">
                       <span className="icon" ><MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal></span> Bid & Upgrade
                    </div>
                    <div className="col-md-6 col-lg-4"> 
                     <span className="icon" ><IoMdCheckboxOutline></IoMdCheckboxOutline></span> Web Check-in
                        
                    </div>
                    <div className="col-md-6 col-lg-4"> 
                     <span className="icon" ><MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal></span> Seat Select
                    </div>
                </div>

{/* crousele */}
<div id="carouselExampleIndicators2" class="carousel slide my-4" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                    
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="./img/crousel-1.jpg" class="d-block w-100" alt="..." width="50%" height="500px" / >
                        {/* <img src="./img/crousel-1.jpg" class="d-block w-100" alt="..." width="50%" height="500px" / > */}
                        </div>
                        <div class="carousel-item">
                        <img src="./img/crousel-2.jpg" class="d-block w-100" alt="..." height="500px"/>
                        </div>
                        <div class="carousel-item">
                        <img src="./img/crousel-3.jpg" class="d-block w-100" alt="..." height="500px"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
        </div>

        {/* crousel 3 */}

        <div id="carouselExampleIndicators3" class="carousel slide my-4" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                    
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="./img/crousel-4.png" class="d-block w-100" alt="..." width="50%" height="500px" / >
                        {/* <img src="./img/crousel-1.jpg" class="d-block w-100" alt="..." width="50%" height="500px" / > */}
                        </div>
                        <div class="carousel-item">
                        <img src="./img/crousel-5.jpg" class="d-block w-100" alt="..." height="500px"/>
                        </div>
                        <div class="carousel-item">
                        <img src="./img/crousel-6.png" class="d-block w-100" alt="..." height="500px"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
        </div>

                {/* last images */}
                <div className="row my-5 images">
                    <div className="col img">
                        <img src="./img/left-img.jpg"/>
                    </div>
                    <div className="col img">
                        <img  src="./img/Cargo-mid-image.jpg"  />
                        {/* <h1>Latest news</h1> */}
                         <div className="news my-3"> 
                            <h1>Latest news</h1>
                        </div> 
                    </div>
                    <div className="col img">
                        <img src="./img/right-img.jpg" />
                    </div>
                </div>

         
        </>
    )
}

export default Home
