import React, { Component } from 'react'
import stateData from './stateData'

export  class StateOption extends Component {
    render() {
        return (
            <>
                {stateData.map((data) => <option key={data.state} value={data.state}>{data.state}</option>)}
            </>
        )
    }
}



export  class DistrictOption extends Component {
    render() {
        const state = this.props.state
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
}
