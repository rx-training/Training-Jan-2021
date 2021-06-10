import React, { useEffect, useState } from 'react'
import Seat from './Seat'
import FlightSearch from '../services/FlightSearch'



function Seatmap(props) {
    
    const selectedFlight = JSON.parse(localStorage.getItem('selectedFlight'))
    const returnSelectedflight = JSON.parse(localStorage.getItem('returnSelectedflight'))
    // console.log(selectedFlight.Aircraft.Seats);
    
    // const [leftSeats , setLeftSeats] = useState([['A01','A02','A03'] , ['B01','B02','B03'],['C1','C2','C3']])
    // const [rightSeats , setRightSeats] = useState([['D1','D2','D3'] , ['E1','E2','E3'] , ['F1','F2','F3']])

    const search = JSON.parse(localStorage.getItem('searchData'))
    const TripType = search.TripType
    const Adults = parseInt(search.Adults) //5
    const Children = parseInt(search.Children)
    const Infants = parseInt(search.Infants)
    const [selectedSeat , setSelectedSeat] = useState([])
    const [returnSelectedSeat , setReturnSelectedSeat] = useState([])

    var persons = []

    for (var i=1 ; i<=Adults ; i++){
        persons.push(`Adult  ${i}`)
    }
    for (var i=1 ; i <= Children ; i++){
        persons.push(`Children  ${i}`)
    }
    for (var i=1 ; i <= Infants ; i++){
        persons.push(`Infants  ${i}`)
    }
    const AircraftId = selectedFlight.Aircraft ? selectedFlight.Aircraft.AircraftId : null
    var Seato = selectedFlight.Aircraft ? selectedFlight.Aircraft.Seats : []
    var RSeato = returnSelectedflight.Aircraft ? returnSelectedflight.Aircraft.Seats : []
    const [Seats , setSeats] = useState(Seato)
    const [RSeats , setRSeats] = useState(RSeato)
    const [btn , setBtn] = useState(0)
    const [personSeat , setPersonSeat] = useState('Adult  1')
    const [Rbtn , setRBtn] = useState(0)
    

    const handleLinkClick = (e , person , seat) =>{ setTimeout(() => {
        // console.log(seat);
        if(btn < persons.length){
        let a = [...selectedSeat , seat]
        console.log(a);
        setSelectedSeat([...selectedSeat , seat])
        console.log(selectedSeat);
        setSeats( Seats.filter(s => s != a[btn] ))
        setBtn(btn + 1)
        setPersonSeat(person)
        console.log(person); }
    }, 1);
    }
    
    const handleRLinkClick = (e , person ,seat) =>{ setTimeout(() => {
        if(Rbtn < persons.length){
        let r = [...returnSelectedSeat , seat]
        setReturnSelectedSeat([...returnSelectedSeat , seat])
        setRSeats( RSeats.filter(s => s != r[Rbtn] ))
        setRBtn(Rbtn + 1)
       setPersonSeat(person)
        console.log(person); }
    }, 1);
    }
    
    const handleClick = (e , st) =>{
        console.log(st);
   
    }
  
    const handleRClick = (e , st) =>{
        console.log(st);
        
        // setPersonSeat(persons[btn])
        
    }

    console.log(selectedSeat);
    console.log(returnSelectedSeat);
    // seat updated into database
    
   
   
    const [seatBtn , setSeatBtn] = useState(0)
    const [goseat , setGoseat] = useState(true)
    const [returnSeat , setreturnSeat] = useState(false)
    
    const handleBtnClick = () => {

        if(seatBtn == 0){
            setGoseat(false)
            setreturnSeat(true)
            
            if(TripType == 'Round Trip'){
                setSeatBtn(seatBtn + 1)
                setPersonSeat('Adult  1')
            }
            else{
                props.history.push('./paymentReview') 
                FlightSearch.updateSeat(selectedSeat , AircraftId)
                FlightSearch.addSeatToPassenger(selectedSeat)
            }    
        }
    
        else{
        props.history.push('./paymentReview')
        FlightSearch.updateSeat(selectedSeat , AircraftId) // update also for return seat
        FlightSearch.addSeatToPassenger(selectedSeat) // add return seat also 
    }
    }

    

    return (
        <div className="container" id="seatSection">
            <h1 className="heading">Please Select Seats</h1>
            

          {goseat && persons.map(p =>{ return personSeat == p && <Seat person={p} persons={persons} Seats={Seats} selectedSeat={selectedSeat} handleLinkClick={handleLinkClick} handleClick={handleClick}></Seat> })}
          {
            returnSeat && TripType == 'Round Trip' && persons.map(p =>{ return personSeat == p && <Seat person={p} persons={persons} Seats={RSeats} selectedSeat={returnSelectedSeat} handleLinkClick={handleRLinkClick} handleClick={handleRClick} handleRLinkClick={handleRLinkClick}></Seat> })
          }
            <div className="row my-5">
                <div className="col"></div>
                <div className="col">
                <button className="btn btn-danger btn-block" disabled={btn !== persons.length }  onClick={handleBtnClick}>CONTINUE</button>
                </div>
            </div>
                           
        </div>
    )
}

export default Seatmap
