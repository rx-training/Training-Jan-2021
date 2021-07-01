import Student from './Student'

const StudentList = (props) => {
    const students = props.students
    return (
        
            <div className="card-group justify-content-center my-4">

                {students.map((item, index) => (

                    <div key={index} className="h-75">
                        {/* passing each student item to Student Component with key=student */}
                        <Student student={item} />
                    </div>
                ))}
            </div>


        

    )
}


export default StudentList