
const StudentDetails = (props) => {
    var student = {
        fname: props.student.fname || 'No fname',
        lname: props.student.lname || 'No lname',
        dob:  props.student.dob || 'No dob',
        class: props.student.class || 'No class',
        formatname : function() {
            var fnam = this.fname.charAt(0).toUpperCase() + this.fname.substr(1).toLowerCase()
            var lnam = this.lname.charAt(0).toUpperCase() + this.lname.substr(1).toLowerCase()
            return fnam + ' ' + lnam
        }
    }
    return (
        <div className="student-details">
            <p>Name: {student.formatname()} </p>
            <p>D.O.B: {student.dob}</p>
            <p>Class: {student.class}</p>
        </div>
    )
}

export default StudentDetails