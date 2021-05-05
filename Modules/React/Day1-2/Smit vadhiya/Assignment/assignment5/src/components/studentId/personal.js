import React from 'react'
import { Image } from './image'

export const Personal = (props) => {
    return (
        <div className="row  bg-secondary text-white">
            <div className="col-4 p-1">
                <Image src={props.url} ></Image>
            </div>
            <div className="col-8 p-3">
                <span className="font-weight-bold"> Id :</span> {props.id} <br/>
                <span className="font-weight-bold">  Name :</span> {props.name}<br/>
                <span className="font-weight-bold"> Date Of Birth :</span> {props.dob}
            </div>
        </div>       
    )
}
