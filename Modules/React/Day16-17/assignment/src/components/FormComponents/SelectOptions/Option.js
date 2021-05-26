import React from 'react'
import stateData from '../../stateData'

//states
export const StateOption = () => {
    return (
        <>
            {stateData.map((data) => <option key={data.state} value={data.state}>{data.state}</option>)}
        </>
    )
}

//districts
export const DistrictOption = (props) => {
    const state = props.state
    var myData = stateData.find((data) => data.state === state)
    var data =[""]
    for(var i in myData){
        data = myData[i]
    }   
    return (
        <>
            {data.map((data) => <option key={data} value={data}>{data}</option>)}
        </>
    )
}
