
const StudentDetails = (props) => {
    var student = {
        fname: props.student.firstName || null,
        lname: props.student.lastName || null,
        dob:  props.student.dob || null,
        class: props.student.class || null,
        formatname : function() {
            var fnam = this.fname.charAt(0).toUpperCase() + this.fname.substr(1).toLowerCase()
            var lnam = this.lname.charAt(0).toUpperCase() + this.lname.substr(1).toLowerCase()
            return fnam + ' ' + lnam
        }
    }
    return (
        <div className="student-details">
            {student.fname && student.lname && <p className="m-0">Name: {student.formatname()} </p> }
            {student.dob && <p className="m-0">D.O.B: {student.dob}</p> }
            {student.class && <p className="m-0">Class: {student.class}</p> }
        </div>
    )
}

export default StudentDetails