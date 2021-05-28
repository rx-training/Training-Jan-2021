import React from 'react'
import {useState , useEffect} from 'react'

function Effect() {

    const [count , setCount] = useState(0);
    const [name , setName] = useState('')

    const handleClick = () =>{
        setCount(count+1)
    }
    useEffect ( () =>{
        console.log('updating componet for count');
        document.title = `You clicked ${count} times`;
        
    } ,[count] )
    return (
        <div>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)}></input>
            <p>You click button {count} time</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default Effect
