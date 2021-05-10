import StudentPhoto from './StudentPhoto'
import StudentDetails from './StudentDetails'
import StudentCollegeDetails from './StudentCollegeDetails'


const Student = ({student}) => {

    return (
        <div>
            
            <StudentCollegeDetails address={student.college.address} name={student.college.name} />
            <StudentPhoto image={student.image} />
            <StudentDetails fname={student.fname} lname={student.lname} dob={student.dob} />


            <br />




            {/* Assignment 2 */}

            {/* <StudentCollegeDetails />
            <StudentPhoto />
            <StudentDetails />

            <StudentCollegeDetails address="Maninagar" name="Sent. Mary Higher Secondary School"/>
            <StudentPhoto />
            <StudentDetails fname="mary" lname="doe" rollno="56" class="8 A" />

            <StudentCollegeDetails address="C.G Road" name="Sent. Xaviers School" />
            <StudentPhoto />
            <StudentDetails fname="peter" lname="doe" rollno="23" class="9 C"/> */}
        </div>

    )
}


export default Student