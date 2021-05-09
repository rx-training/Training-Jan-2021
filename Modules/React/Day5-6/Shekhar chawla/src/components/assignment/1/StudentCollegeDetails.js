
const StudentCollegeDetails = (props) => {
    var college = {
        name: props.college.name || 'No college name',
        address: props.college.address || 'No address'
    }
    return (
        <div className="student-college-details">
            <p className="m-0">School: {college.name}</p>
            <p className="m-0">Address: {college.address}</p>
        </div>
    )
}

export default StudentCollegeDetails