import React from 'react';

const Demo = () => <h1>Child Component</h1>


const Clock = () =>{

    return (
        <div>
            <h1>Right now Time is {new Date().toLocaleTimeString()} </h1>
            <Demo></Demo>
        </div>
    )
}


export default Clock;