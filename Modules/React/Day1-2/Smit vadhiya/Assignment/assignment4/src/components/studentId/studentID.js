import React from 'react'
import { Collage } from './collage'
import { Personal } from './personal'
import '../../App.css'

/* 
export const StudentID = (props) => {
    var {id,firstName,lastNme,dob,clgName,clgAddress,clgLogo,url} = props.info
    
    return (
        <div className="container wid border mx-auto my-2 border-primary rounded m-2">
            <Collage name={clgName} address={clgAddress} logo ={clgLogo} />
            <Personal id={id} url={url}  name={firstName +" "+lastNme} dob={dob} />
        </div>
    )
}
 */


export const StudentID = (props) => {
    var {id,firstName,lastNme,dob,clgName,clgAddress,clgLogo,url} = props
    
    return (
        <div className="container wid border mx-auto my-2 border-primary rounded m-2">
            <Collage name={clgName} address={clgAddress} logo ={clgLogo} />
            <Personal id={id} url={url}  name={firstName +" "+lastNme} dob={dob} />
        </div>
    )
}
