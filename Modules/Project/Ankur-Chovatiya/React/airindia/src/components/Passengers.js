import React, { useState } from 'react'
import SmallForm from './SmallForm'
import FlighSearch from '../services/FlightSearch'

function Passengers(props) {
    const [passengerDetails , setPassenegerDetails] = useState({
        title : '' ,
        firstName : '' ,
        lastName : '' ,
        FFprogram : '' ,
        FFnumber : '' ,
        meal : '' ,
        speReq : '' , 
        cntcode : '+91' ,
        homeNumber : '' ,
        mobileNumber : '' ,
        primaryEmail : '',
        secondaryEmail : '' ,
        
    }) 

    const [agreeTerm , setAgreeTerm] = useState(true)
    const [showGuest , setShowGuest] = useState(false)
    const [showMain , setShowMain] = useState(true)
    
    const handleChange = (e) =>{
        // console.log(e.target.name);

        setPassenegerDetails({ ...passengerDetails ,
            [e.target.name] : e.target.value
        })
    }

    const search = JSON.parse(localStorage.getItem('searchData'))
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('form submited');
        
        // for multiple guests
        const gusests = []
        for(let i of persons){
            const guest = {
                Title :  passengerDetails[`${i}title`] ,
                FirstName : passengerDetails[`${i}firstName`] ,
                LastName : passengerDetails[`${i}lastName`] ,
                FrequentFlyerProgram :passengerDetails[`${i}FFprogram`] ,
                FrequentFlyerNumber :passengerDetails[`${i}FFnumber`] ,
                MealSelection : passengerDetails[`${i}meal`],
                SpecialAssistanceRequest :passengerDetails[`${i}speReq`] 
            }
            gusests.push(guest) 
        }
        const passengerObj = {
            Title : gusests[0].Title ,
            FirstName : gusests[0].FirstName ,
            LastName : gusests[0].LastName ,
            FrequentFlyerProgram : gusests[0].FrequentFlyerProgram ,
            FrequentFlyerNumber : gusests[0].FrequentFlyerNumber ,
            MealSelection : gusests[0].MealSelection ,
            SpecialAssistanceRequest : gusests[0].SpecialAssistanceRequest ,
            AvailDomesticConcession : search.Concession ,
            ConcessionType : search.ConcessionaryType ,
            Adults : parseInt(search.Adults) ,
            Children : parseInt(search.Children) ,
            Infants : parseInt(search.Infants) ,
            Guests : gusests.slice(1,gusests.length) ,
            PromotionCode : search.PromotionCode ,
            HomeNumber : passengerDetails.homeNumber ,
            MobileNo : passengerDetails.mobileNumber ,
            PrimaryEmail : passengerDetails.primaryEmail ,
            ScecondaryEmail : passengerDetails.secondaryEmail
        }
        // console.log(passengerObj);
        const passengerDetail = JSON.stringify(passengerObj)
        localStorage.setItem('passengerDetails' , passengerDetail)
        // save data to database
        FlighSearch.setPassengerDetails(passengerObj)
        props.history.push('./seatmap')
    }

    
    const Adults = parseInt(search.Adults) //5
    const Children = parseInt(search.Children)
    const Infants = parseInt(search.Infants)

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

    const [selectedForm ,setSelectedForm ] = useState(persons[0])
console.log(selectedForm);

    const handleClick = (e , person) =>{
        console.log(person);
        setShowGuest(true)
        setShowMain(false)
        setSelectedForm(person) 

    }
    const [btn , setBtn] = useState(1)
    
    const handleBtnClick = (e) => {
        
        setSelectedForm(persons[btn])
        setBtn(btn + 1)
        
    }

console.log(passengerDetails);


    const {cntcode , homeNumber , mobileNumber , primaryEmail , secondaryEmail } = passengerDetails
    return (
        <>
            <div id="passengerList" >
                    <ul>
                        {persons.map(person => <li onClick={(e) => handleClick(e , person)}>{person}</li>)
                        }
                    </ul>
            </div>
           <div className="container" style={{width:'45rem' , backgroundColor:"lightgray"}}>
            {/* <h1>{persons.map(person => person)}</h1> */}
            <hr />
            <form onSubmit={handleSubmit}>

         {persons.map(p => {return   selectedForm == p && <SmallForm person={p} data={passengerDetails} handleChange={handleChange}></SmallForm> }) }


               { selectedForm === persons[0] && <div><hr />
                    <h3>CONTACT DETAILS</h3>
                    <hr />
                    <div className="row my-4">
                        <div className="col form-inline">
                            <select className="form-control" name="cntcode" value={cntcode} onChange={(e) => handleChange(e)}>
                                <option value="+91" selected>+91</option>
                            </select>
                            
                            <input className="form-control" type="number" placeholder="Home Number" name="homeNumber" value={homeNumber} onChange={(e) => handleChange(e) }></input>
                        </div>
                        <div className="col form-inline">
                        <select className="form-control" name="cntcode" value={cntcode} onChange={(e) => handleChange(e)}>
                                <option selected>+91</option>
                            </select>
                            
                            <input className="form-control" type="number" placeholder="Mobile Number" name="mobileNumber" value={mobileNumber} onChange={(e) => handleChange(e)}></input>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col">
                            <label>PRIMARY EMAIL *</label>
                            <input className="form-control" type="email" placeholder="Primary Email" name="primaryEmail" value={primaryEmail} onChange={(e) =>handleChange(e)}></input>
                        </div>
                        <div className="col">
                        <label>SECONDARY EMAIL </label>
                            <input className="form-control" type="email" placeholder="Secondary Email" name="secondaryEmail" value={secondaryEmail} onChange={(e) => handleChange(e)}></input>
                        </div>
                    </div>
                </div>}

                 <div className="row my-4">
                    { selectedForm === persons[persons.length-1] && <div className="col my-3">
                    <div className="form-group form-check">
                    <input type="checkbox" class="form-check-input" name="termAndCondition" onChange={(e) => setAgreeTerm(false)} />
                    <label >I AGREE TO  T&C. </label>
                    </div> 
                    </div> }

                    
                    
                    <div className="col my-3">
                        {
                            selectedForm === persons[persons.length - 1 ] ? 
                            <button  type= "submit" className="btn btn-danger" disabled={agreeTerm}>CONTINUE</button> :
                            <button  type= "button" className="btn btn-danger" onClick={handleBtnClick}>NEXT GUEST</button>
                        }
                    
                   
                </div></div>

            </form> 

                       </div>
        </>
    )
}

export default Passengers
