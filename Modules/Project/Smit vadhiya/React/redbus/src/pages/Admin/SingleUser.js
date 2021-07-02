import React, { useEffect, useState } from 'react'
import AdminServices from '../../services/AdminServices'

export const SingleUser = (props) => {

   const [user, setUser] = useState({})

   useEffect(() => {
      const id = props.match.params.id
      const adminData = JSON.parse(localStorage.getItem('adminData'))
      if(adminData) {
         AdminServices.adminGetUserById(id,adminData).then(res => {
            if(res.data === 'Unauthorized Access'){
               props.history.push('/admin/login')
            } else {
               setUser(res.data)
               console.log(res.data);
            }
         })
      } else {
         props.history.push('/admin/login')
      }
   }, [])

   return (
      <div className="p-5 m-5">
         <div className="container ">
            <div className="row">
               
               <div className="table text-uppercase  table-center ">
                  <div className="col-auto col-md-6 mx-auto">

                  <tbody>
                     <tr>
                        <th>full name</th>
                        <td>{user.firstName+" "+user.lastName}</td>
                     </tr>
                     <tr>
                        <th>email</th>
                        <td className="text-lowercase" >{user.email}</td>
                     </tr>
                     <tr>
                        <th>Phone number</th>
                        <td>{user.phoneNumber}</td>
                     </tr>
                     <tr>
                        <th>gender</th>
                        <td>{user.gander}</td>
                     </tr>
                     <tr>
                        <th>full name</th>
                        <td>{user.phoneNumber}</td>
                     </tr>
                  </tbody>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
