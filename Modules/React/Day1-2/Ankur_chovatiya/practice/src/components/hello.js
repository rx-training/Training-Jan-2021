import React from 'react';

const Hello = (props) =>{
    console.log(props);
    return (
        <div>
            <h1 style ={{color:"red"}}>This is  {props.name} and his Role is {props.role}</h1>
            {props.children}
        </div>
        )
}

export default Hello;