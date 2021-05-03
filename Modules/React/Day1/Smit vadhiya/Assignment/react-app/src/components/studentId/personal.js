import React from 'react'

export const Personal = (props) => {
    
    return (
        
        <tbody>
                <tr>
                <th>Id </th><td>{props.id}</td> 
            </tr>
            <tr>
                <th>Name </th><td>{props.fname+" "+props.lname}</td> 
            </tr>
            <tr>
                <th>Date-Of-Birth </th><td>{props.dob}</td> 
            </tr>
        </tbody>
                
    )
}
