import React from 'react'
import stateData from './stateData'


export const Option = () => {
    return (
        <>
            {stateData.map((data) => <option key={data.state} value={data.state}>{data.state}</option>)}
        </>
    )
}


export const District = (props) => {
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

/* 
export  class District extends Component {
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
 */