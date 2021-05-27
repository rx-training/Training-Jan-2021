import React , {useState} from 'react'
import StudentForm from './StudentForm'

function Student() {
    const [name, setName] = useState({firstName:'' , lastName:''})
    return (
        <div>
            firstName :  <input type="text" onChange={(e) => setName({...name , firstName:e.target.value})}></input> <br></br>
            lastName : <input type="text" onChange={(e) => setName({...name , lastName:e.target.value})}></input> <br></br>
            <h1>Full Name :- {name.firstName + " " + name.lastName}</h1>
           
               
        </div>
    )
}

export default Student
