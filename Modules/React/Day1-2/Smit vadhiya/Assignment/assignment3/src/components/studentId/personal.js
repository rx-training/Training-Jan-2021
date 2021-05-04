import React from 'react'
import { Image } from './image'

export const Personal = () => {
    const Id = "12345"
    const fname = "Abhishek"
    const lname = "shah"
    const dob = " 22-04-1998"
    return (
        <div className="row  bg-secondary text-white">
            <div className="col-4 p-1">
                <Image />
            </div>
            <div className="col-8 p-3">
                <span className="font-weight-bold"> Id :</span> {Id} <br/>
                <span className="font-weight-bold">  Name : </span> {fname + " " +lname} <br/>
                <span className="font-weight-bold"> Date Of Birth :</span> {dob}
            </div>
        </div>       
    )
}

