import React from 'react'

export const Collage = (props) => {
   
    return (
       
        <tbody>
                <tr>
                <th>Collage Name </th><td>{props.name}</td> 
            </tr>
            <tr>
                <th>Collage Address </th><td>{props.address}</td> 
            </tr>
            <tr>
                <th>Collage Logo </th><td>{props.logo}</td> 
            </tr>
        </tbody>
                
    )
}
