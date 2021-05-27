import React , {useState } from 'react'
import MouseEvent from './MouseEvent'

function CleanEvent() {

    const [display ,setDisplay ] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle component</button>
            {display && <MouseEvent></MouseEvent>}
        </div>
    )
}

export default CleanEvent
