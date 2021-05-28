import React, { useState, useEffect } from 'react'
import StudentServices from '../../services/StudentServices'
import { Collage } from './stdChild/collage'
import { Personal } from './stdChild/personal'

export const StudentID = ({data}) => {
    return (
        <div className="container p-0 wid my-2 border mx-auto border-primary rounded ">
            <Collage  />
            <Personal id={data._id} url={data.stdImg}  name={data.stdFirstName +" "+data.stdLastName} dob={data.stdDob} />
        </div>
    )
}


export const StudentIDs = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        StudentServices.getStudents().then(res => {
            setData([...res.data])
        })
    },[])

    return (
        <div className="container-fluid">
            <div className="row">
                {data.map(data =>  
                    <div key={data._id} className="col-12 col-md-6 col-xl-4">
                        <StudentID  data = {data}  />
                    </div>
                )}
            </div>
        </div>
    )
}

