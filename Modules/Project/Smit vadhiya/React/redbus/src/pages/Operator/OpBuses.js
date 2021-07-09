import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { BiSync } from 'react-icons/bi'
import {MdUpdate} from 'react-icons/md'
import { NewBusForm } from '../../components/Operator/NewBusForm'
import OperatorServices from '../../services/OperatorServices'

export const OpBuses = (props) => {

   const initial = {
            _id:"",
            busName:"",
            busType:"",
         }

   const [buses, setBuses] = useState([])
   const [token, setToken] = useState({})
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [isUpdate, setisUpdate] = useState(false)

   const [busData, setbusData] = useState(initial)

   const handleChange =(e) =>{
      const {name, value} = e.target
      setbusData({...busData, [name] : value})
   }

   const handleSubmit = (e) =>{  
      e.preventDefault()
      if(isUpdate)
      {
         OperatorServices.updateBus(token.id,busData._id,busData,token.token).then(res => console.log(res.data))
      } else {
         OperatorServices.addNewBus(token.id,busData,token.token).then( res => props.history.push('/operator/buses')).catch(err => console.log(err))
      }
      setbusData(initial)
      handleClose()
   }

   const update = (id) =>{
      const data = buses.find((bus) => bus._id === id)
      setisUpdate(true)
      setbusData({...data})
      handleShow()
      console.log(data);
   }

   useEffect(() => {
      const tokenData = JSON.parse(localStorage.getItem('operatorToken'))
      setToken(tokenData)
      if(tokenData){
         OperatorServices.getBusesById(tokenData.id,tokenData.token).then(res => {
            setBuses(res.data,console.log(buses))
         })
      } else {
         props.history.push('/operator/login') 
      }
   }, [])

   return (
      <div className="mt-5 pt-4">
         <div className="container">
            <div className="table-responsive text-capitalize my-2">
               <div>
               <button className="btn btn-success" onClick={() => {handleShow(); setisUpdate(false); setbusData(initial)} } > Add New bus <i className="fa fa-plus"></i></button>
               </div>
               <table className="table table-striped">
                  <thead className="bg-dark text-white">
                     <tr>
                        <th>Bus number</th>
                        <th>Busname</th>
                        <th>Bus Type</th>
                        <th>rating</th>
                        <th>Update </th>
                     </tr>
                  </thead>
                  <tbody>
                     {buses.map( bus => <tr key={bus._id}>
                        <td>{bus._id}</td>
                        <td>{bus.busName}</td>
                        <td>{bus.busType}</td>
                        <td>{bus.rating}</td>
                        <td>
                           <button className="btn btn-info" onClick={ () => update(bus._id)} >Update <span className="h4"  >  <MdUpdate/> </span> </button>
                        </td>
                     </tr>)}
                  </tbody>
               </table>
            </div>
            <Modal
               size="lg"
               show={show}
               onHide={handleClose}
            >
               <Modal.Header closeButton className={`bg-${isUpdate ? "secondary" :"success"} text-white`}>
                  <Modal.Title>
                     {isUpdate ? 'Update Bus' : 'Add New Bus'}
                  </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <NewBusForm data={{...busData,isUpdate}}  handleChange={handleChange} handleSubmit={handleSubmit} />
               </Modal.Body>
            </Modal>
         </div>
      </div>
   )
}  
