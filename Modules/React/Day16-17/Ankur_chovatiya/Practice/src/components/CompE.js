import React , {useContext} from 'react'
import CompF from './CompF'
import {NameContext, UserContext} from './Context'
function CompE() {
    const userName = useContext(UserContext)
    const Name = useContext(NameContext)
    return (
        <div>
            <h1>From component E -{userName} - {Name}</h1>
            <CompF></CompF>
        </div>
    )
}

export default CompE
