
const StudentCollegeDetails = (props) => {
    var college = {
        name: props.college.name || 'No college name',
        address: props.college.address || 'No address'
    }
    return (
        <div className="student-college-details">
            <p>School: {college.name}</p>
            <p>Address: {college.address}</p>
        </div>
    )
}

export default StudentCollegeDetails