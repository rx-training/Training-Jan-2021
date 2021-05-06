
const StudentDetails = (props) => {
    var student = {
        fname: props.fname || 'john',
        lname: props.lname || 'doe',
        dob:  props.dob || '07/07/2000',
        class: props.class || '7 B',
        formatname : function() {
            var fnam = this.fname.charAt(0).toUpperCase() + this.fname.substr(1).toLowerCase()
            var lnam = this.lname.charAt(0).toUpperCase() + this.lname.substr(1).toLowerCase()
            return fnam + ' ' + lnam
        }
    }
    return (
        <div className="student-details">
            <p>Name: {student.formatname()} </p>
            <p>Roll No: {student.dob}</p>
            <p>Class: {student.class}</p>
        </div>
    )
}

export default StudentDetails