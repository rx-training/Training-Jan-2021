import React , {useState} from 'react'

function Counter() {

    const [count , setCount] = useState(0);
     
    // with previous state
    const incrementFive = () => {
        for(var i=0 ; i<5 ; i++){
        setCount(prevCount => prevCount + 1)}
    }
    return (
        <div>
            <h1>count - {count}</h1>
            <button onClick={()=> setCount(count+1)}>count {count}</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default Counter
