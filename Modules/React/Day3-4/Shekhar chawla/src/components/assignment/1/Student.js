import StudentPhoto from './StudentPhoto'
import StudentDetails from './StudentDetails'
import StudentCollegeDetails from './StudentCollegeDetails'


const Student = (props) => {
    var student = props.student
    const style = {
        width: "18rem"
    }
    return (
        <div className="card mx-4 h-100" style={style}>
            <div class="card-header">
            <StudentCollegeDetails college={student.college} />
            </div>
            <StudentPhoto image={student.image} />
            <div class="card-body">
                <h5 class="card-title">Student Details</h5>
                <p class="card-text"><StudentDetails student={student} /></p>
            </div>
        </div>

    )
}


export default Student