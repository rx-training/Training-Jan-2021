import React from 'react'
import { Collage } from './collage'
import { Personal } from './personal'
import '../../App.css'


export const StudentID = () => {
    return (
        <div className="container wid border mx-auto my-2 border-primary rounded m-2">
            <Collage  />
            <Personal />
        </div>
    )
}
