
const StudentCollegeDetails = (props) => {
    var college = {
        name: props.name || 'Mahatma Gandhi Higher Secondary School',
        address: props.address || 'Naroda'
    }
    return (
        <div className="student-college-details">
            <p>School: {college.name}</p>
            <p>Address: {college.address}</p>
        </div>
    )
}

export default StudentCollegeDetails