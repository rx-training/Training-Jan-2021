import React, { useContext } from 'react'
import {UserContext , NameContext} from './Context'

function CompF() {
    return (
        <div>
           <UserContext.Consumer>
               {
                   (userName) =>{
                       return (
                            <NameContext.Consumer>
                                {
                                    (Name) =>{
                                        return <h1>{userName} - {Name}</h1>
                                    }
                                }
                            </NameContext.Consumer>
                        )
                   }
               }
           </UserContext.Consumer>
        </div>
    )
}

export default CompF
