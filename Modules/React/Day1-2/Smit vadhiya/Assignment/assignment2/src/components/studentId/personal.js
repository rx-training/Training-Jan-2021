import React from 'react'
import { Image } from './image'

export const Personal = () => {
    return (
        <div className="row  bg-secondary text-white">
            <div className="col-4 p-1">
                <Image />
            </div>
            <div className="col-8 p-3">
                <span className="font-weight-bold"> Id : 12345</span> <br/>
                <span className="font-weight-bold">  Name : Abhishek shah</span><br/>
                <span className="font-weight-bold"> Date Of Birth : 22-04-1998</span>
            </div>
        </div>       
    )
}
