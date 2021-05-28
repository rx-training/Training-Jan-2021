import "./App.css"

const Students=[{
  Student1:{
    ImageUrl : "https://picsum.photos/534/354",
    StudentInfo : {
      ID: "01",
      FirstName: "Chirag",
      LastName: "Fabiyani",
      DateOfBirth: "11/02/2000"
    },
    CollegeInfo: {
      CollegeName: "Ahmedabad Institute of Technology",
      CollegeAddress: "S.G Highway Gota",
      CollegeLogo: "AIT"
    }
  }
},{
  Student2:{
    ImageUrl : "https://picsum.photos/535/354",
    StudentInfo : {
      ID: "02",
      FirstName: "Vinod",
      LastName: "Meghani",
      DateOfBirth: "03/04/2000"
    },
    CollegeInfo: {
      CollegeName: "Ahmedabad Institute of Technology",
      CollegeAddress: "S.G Highway Gota",
      CollegeLogo: "AIT"
    }
  }
},{
  Student3:{
    ImageUrl : "https://picsum.photos/536/354",
    StudentInfo : {
      ID: "03",
      FirstName: "Kirtan",
      LastName: "Patadia",
      DateOfBirth: "25/10/2000"
    },
    CollegeInfo: {
      CollegeName: "Ahmedabad Institute of Technology",
      CollegeAddress: "S.G Highway Gota",
      CollegeLogo: "AIT"
    }
  }
}]




const App = () => {
  return (
    <section >
      <StudentIdCard Student = {Students[0].Student1} />
      <StudentIdCard Student = {Students[1].Student2} />
      <StudentIdCard Student = {Students[2].Student3} />
    </section>
  );
}

const StudentIdCard = (props) => {
  const ImageUrl = props.Student.ImageUrl;
  const StudentInfo = props.Student.StudentInfo;
  const CollegeInfo = props.Student.CollegeInfo;
  return(
    <section className = "App">
      <Image ImageUrl = {ImageUrl} />
      <Personal StudentInfo = {StudentInfo} /> 
      <College CollegeInfo = {CollegeInfo} />     
    </section>
  )
}

const imageStyle = {
  marginTop: "2%"
}

const Image = (props) => {
  const ImageUrl = props.ImageUrl;
  return(
    <section>
      <img style={imageStyle} width="200" src={ImageUrl} alt="" />
      <hr />
    </section>
  )
}

const Personal = ({StudentInfo:{ID,FirstName,LastName,DateOfBirth}}) => {
  return(
    <section>
      <p>ID: {ID}</p>
      <p>FirstName: {FirstName}</p>
      <p>LastName: {LastName}</p>
      <p>DateOfBirth: {DateOfBirth}</p>
      <hr />
    </section>
  )
}

const College = ({CollegeInfo:{CollegeName,CollegeAddress,CollegeLogo}}) => {
  return(
    <section>
      <p>CollegeName: {CollegeName}</p>
      <p>CollegeAddress: {CollegeAddress}</p>
      <p>CollegeLogo: {CollegeLogo}</p>
      <hr />
    </section>
  )
}

export default App;