import React from 'react'
import { Image } from './image'


export const Personal = ({id,name,dob,url}) => {
    return (
            <div className="row m-0 bg-secondary text-white">
            <div className="col-4 p-1">
                <Image src={url} ></Image>
            </div>
            <div className="col-8 p-3 text-capitalize">
                <span className="font-weight-bold"> Id :</span > {id} <br/>
                <span className="font-weight-bold">  Name :</span> {name}<br/>
                <span className="font-weight-bold"> Date Of Birth :</span> {dob}
            </div>
        </div> 
        )
}
