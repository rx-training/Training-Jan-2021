import { students } from './data'
import Student from './Student'

const StudentList = (props) => {

    return (
        <div className="container">
            <div className="card-group my-4">

                {students.map((item, index) => (

                    <div key={index} className="bg-light">
                        {/* passing each student item to Student Component with key=student */}
                        <Student student={item} />
                    </div>
                ))}
            </div>


        </div>

    )
}


export default StudentList