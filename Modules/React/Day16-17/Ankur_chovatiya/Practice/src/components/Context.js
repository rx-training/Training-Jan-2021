import React , {useContext} from 'react'
import CompD from './CompD'


  export const UserContext = React.createContext()
  export const NameContext = React.createContext()

function Context() {
    
    return (
        <div>
            <UserContext.Provider value="anks">
                <NameContext.Provider value="Ankur Patel">
                    <CompD></CompD>
                </NameContext.Provider>
            </UserContext.Provider>
            
        </div>
    )
}

export default Context
