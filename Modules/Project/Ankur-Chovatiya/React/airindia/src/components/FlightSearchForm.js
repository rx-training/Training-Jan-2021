import React, { useEffect } from 'react'
import { useState } from 'react'



function FlightSearchForm(props) {

    const [err , setErr] = useState(null)
    const [searchDetails ,setSearchDetails] = useState({
        TripType : 'Round Trip',
        From : '',
        To : '',
        DepartingDate : '',
        ReturningDate : '',
        Concession : false ,
        ConcessionaryType : '',
        Adults: '1',
        Children : '0',
        Infants :'0',
        Economy : 'Bussiness',
        PromotionCode :''

       })

    const handleChange = (e) =>{
          
        setSearchDetails( (prev) =>{
            return {
                ...prev , 
                [e.target.name] : e.target.value 
            }
        }
        )
    }
    // const handleEdit = (e) => {
    //     setSearchDetails({
    //         ...searchDetails
    //     })
    // }


   

    const handleSubmit = (e) =>{

        e.preventDefault()
        const serchObj = {
            TripType: searchDetails.TripType,
            TakeoffPoint : searchDetails.From,
            LandingPoint : searchDetails.To,
            DepartingDate : searchDetails.DepartingDate,
            ReturningDate : searchDetails.ReturningDate,
            Concession : searchDetails.Concession,
            ConcessionaryType : searchDetails.ConcessionaryType,
            Economy : searchDetails.Economy,
            Adults : searchDetails.Adults,
            Children : searchDetails.Children ,
            Infants : searchDetails.Infants,
            PromotionCode :searchDetails.PromotionCode ,
            
        }
        const requiredValue = {
            From : searchDetails.From ,
            To : searchDetails.To ,
            DepartingDate : searchDetails.DepartingDate ,
            ReturningDate : searchDetails.DepartingDate ,
            Economy : searchDetails.Economy ,
            Adults : searchDetails.Economy, 
            TripType : 'Round Trip',
            Concession : false ,
            ConcessionaryType : '',
            // Adults: '1',
            Children : '0',
            Infants :'0',
            // Economy : '',
            PromotionCode :''

        }
        // console.log(serchObj);
            const searchData = JSON.stringify(serchObj) 
            localStorage.setItem('searchData' , searchData);
            sessionStorage.setItem('search',requiredValue )
            
        props.history.push(`${props.match.url}/select`)
    }
    // useEffect(()=>{
        // const data = sessionStorage.getItem('search')
        // console.log(JSON.parse(data));
    //     // setSearchDetails(JSON.parse(data))
    // },[])


    console.log(searchDetails);
    // console.log(props);
    const {TripType ,From ,To ,DepartingDate ,ReturningDate ,Concession  ,ConcessionaryType,Adults,Children,Infants,Economy,PromotionCode } = searchDetails
    return (
        <div className="card p-3" style={{width:"26rem"}}>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="row">
                   <div className=" form-check col-md-6">
                        <input type="radio" className="form-check-input" name="TripType" value="One Way" onChange={handleChange}></input>
                        <label className="form-check-lable">One Way</label>
                   </div>
                   <div className=" form-check col-md-6">
                        <input type="radio" className="form-check-input"  checked={TripType == 'Round Trip' ? true : false} name="TripType" value="Round Trip" onChange={handleChange}></input>
                        <label className="form-check-lable" >Round Trip</label>
                   </div>
                </div>
                <div className="form-group row my-2">
                   <div className="col">
                        <input type="text" className="form-control" placeholder="From" name="From" value={From} onChange={handleChange} required></input>
                   </div>
                </div>
                <div className="form-group row">
                   <div className="col">
                        <input type="text" className="form-control" placeholder="To" name="To" value={To} onChange={handleChange} required></input>
                   </div>
                </div>
                <div className="form-group row my-0">
                   <div className="col-md-6">
                       <label className="ml-0">Departing :-</label>
                        <input type="date" className="form-control" placeholder="Departing" name="DepartingDate" value={DepartingDate} onChange={handleChange} required></input >
                   </div>
                   <div className="col-md-6">
                   <label className="ml-0">Returning :-</label>
                        <input type="date" className="form-control"  disabled={TripType == 'One Way'} placeholder="Returning" name="ReturningDate" value={ReturningDate} onChange={handleChange} required></input>
                   </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p>Would you like to avail of Domestic Concession? </p>
                    </div>
                    <div className="col-6">
                    
                   <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="Concession" value="Yes" onChange={handleChange}></input>
                        <label className="form-check-lable">YES</label>
                        
                   </div>
                   <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="Concession" value="No" onChange={handleChange}></input>
                        <label className="form-check-lable">NO</label>
                        
                   </div>
                   </div>
                   <div className="form-check col-6">
                   <select className="custom-select" name="ConcessionaryType" value={ConcessionaryType} onChange={handleChange}>
                            <option selected>Concessionary Type</option>
                            <option value="youth">Youth</option>
                            <option value="student">Student</option>
                            <option value="senior citizen">Senior Citizen</option>
                            <option value="ltc">LTC- Leave Travel Concession</option>
                            <option value="armed forces">Armed Forces</option>
                            <option value="reserved engineer">Reserve Engineer</option>
                            <option value="para commando">ParaMilitary Force</option>
                            <option value="bravery awardee">Bravery Awardee</option>
                            <option value="war window">War Window</option>
                            <option value="war desabled officer">War Desabled Officer</option>
                        </select>
                   </div>
                </div>

                <div className="form-group row ">
                   <div className="col-md-4">
                       <label className="ml-0">Adults :-</label>
                        <select className="custom-select" name="Adults" value={Adults} onChange={handleChange}>
                            <option  value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                            <option value="6" >6</option>
                            <option value="7" >7</option>
                            <option value="8" >8</option>
                            <option value="9" >9</option>
                            <option value="10" >10</option>

                        </select>
                   </div>
                   <div className="col-md-4">
                        <label className="ml-0">Children:-</label>
                        <select className="custom-select" name="Children" value={Children} onChange={handleChange}>
                        <option selected value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                            <option value="6" >6</option>
                            <option value="7" >7</option>
                            <option value="8" >8</option>
                            <option value="9" >9</option>
                            <option value="10" >10</option>
                        </select>
                   </div>
                   <div className="col-md-4">
                        <label className="ml-0">Infants :-</label>
                        <select className="custom-select" name="Infants" value={Infants} onChange={handleChange}>
                        <option selected value="0">0</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                            <option value="6" >6</option>
                            <option value="7" >7</option>
                            <option value="8" >8</option>
                            <option value="9" >9</option>
                            <option value="10" >10</option>
                        </select>
                   </div>
                </div>
                <div className=" form-group row">
                    <div className="col-6 my-0">
                        <select className="custom-select" name="Economy" value={Economy} onChange={handleChange} required >
                            <option selected>Economy</option>
                            <option value="Bussiness">Bussiness</option>
                            <option value="First">First</option>
                        </select>
                    </div>
                    <div className="form-group col-6 my-0">
                    
                        <input type="text" className="form-control" placeholder="Promotion Code" name="PromotionCode" value={PromotionCode} onChange={handleChange}></input>
                   
                    </div>
                    
                </div>
                
                 
                    <button type="submit" className="btn btn-primary btn-block">Book Now</button>
                   
                    
               

            </form>
        </div>
    )
}

export default FlightSearchForm
