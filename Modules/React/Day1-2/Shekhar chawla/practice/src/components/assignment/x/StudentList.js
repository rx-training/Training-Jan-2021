import { students } from './data'
import Student from './Student'

const StudentList = (props) => {
    
    return (
        <div>
            {students.map( (item, index) => ( 
                <div key={index}>
                    <p>Student {index+1}</p>
                    
                    {/* passing each student item to Student Component with key=student */}
                    <Student student={item} />
                    <hr />
                </div>
            ))}
            
            {props.children}
        </div>
        
    )
}


export default StudentList