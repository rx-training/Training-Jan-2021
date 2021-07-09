import React,{useEffect,useState} from 'react'
import  SingleBusDetail  from '../../components/Users/BusResult/SingleBusDetail'
import MyBuses from '../../services/BusServices'
import {HiArrowRight} from 'react-icons/hi'
import {CgArrowsExchangeAlt} from 'react-icons/cg'


export const BusResult = (props) => {

   const [searchData, setSearchData] = useState([])
   const [data, setData] = useState({fromCity:"",toCity:"",date:""})
   const [isEdit, setisEdit] = useState(false)
   

   const exchangeCity =()=>{

      setData({...data, fromCity : data.toCity,toCity : data.fromCity})
   }

   useEffect(() => {
      setData({...props.match.params},localStorage.setItem('searchData',JSON.stringify({...props.match.params})))
      
      const {id,token} = JSON.parse(localStorage.getItem('tokenData'))
      MyBuses.searchBuses(id,props.match.params,token).then(res => {
         console.log(res.data);
         const buses = res.data
         if(buses.length !== 0 ){
            setSearchData([...buses])
         } else {
            setSearchData([])
         }
      })
   },[props.match.params])

   const handleEdit = () =>{
      setisEdit(!isEdit)
   }

   const handleChange = (e) => {
      const {name,value} = e.target
      setData({...data,[name] : value})
   }

   

   const handleSubmit = (e) => {
      e.preventDefault()
      props.history.push(`/user/bus-results/${data.fromCity}/${data.toCity}/${data.date}`)
      setisEdit(false)
   }

   return (
   <div className=" container pt-5 mt-5" id="displayBus">
         {isEdit
         ? 
         <div className=" container search-form  bg-dark text-white py-2 ">
               <form onSubmit={handleSubmit} className="form gy-2  text-center d-block  " >
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center w-75 mx-auto">
                     <input 
                        type="text" 
                        className="bg-dark form-control mx-2" 
                        name="fromCity"
                        required
                        onChange={handleChange}
                        value={data.fromCity}
                     />
                     <span 
                        className="text-white" 
                        style={{fontSize:'25px'}} 
                        onClick={exchangeCity} 
                     >
                        <CgArrowsExchangeAlt />
                     </span>
                     <input 
                        type="text" 
                        className="bg-dark form-control  mx-2" 
                        name="toCity"
                        onChange={handleChange}
                        value={data.toCity}
                        required
                     />
                     
                     <input 
                        type="date" 
                        className="bg-dark form-control  mx-2" 
                        name="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        onChange={handleChange}
                        value={data.date}
                     />
                  </div>
                     <input 
                        type="submit" 
                        className="btn my-2 btn-theme " 
                        value="search"
                     />
               </form>
            </div>

         :<div className="container bg-dark text-white text-center p-3" id="displayHeading">
            <div className="d-flex flex-column flex-sm-row  justify-content-center">
               <div  className="h4 m-2">
                  <div > 
                     <span className="text-capitalize">{data.fromCity} </span> 
                        <HiArrowRight /> 
                     <span className="text-capitalize"> {data.toCity}</span>
                  </div>
               </div>
               <div className="m-2 h4">
                  <div> &#10641; <span className="p-3">{data.date}</span> &#10642; </div>
               </div>
            </div>
               <button className="btn btn-theme" onClick={handleEdit} >Edit search</button>
         </div>}

         {searchData.length === 0
         ? <h1 className="m-5 text-center  text-danger">Sorry..No bus found for this route</h1> 
         :  searchData.map(bus => <SingleBusDetail key={bus.routeId} {...bus}  />)}
      </div>
   )
}
