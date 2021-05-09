import { students } from './data'
import Student from './Student'

const StudentList = (props) => {

    return (
        
            <div className="card-group justify-content-center my-4">

                {students.map((item, index) => (

                    <div key={index} className="bg-dark">
                        {/* passing each student item to Student Component with key=student */}
                        <Student student={item} />
                    </div>
                ))}
            </div>


        

    )
}


export default StudentList