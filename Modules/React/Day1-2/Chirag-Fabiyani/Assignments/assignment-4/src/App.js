import "./App.css"


const ImageUrl1 = "https://picsum.photos/534/354";
const ImageUrl2 = "https://picsum.photos/535/354";
const ImageUrl3 = "https://picsum.photos/536/354";

const StudentInfo1 = {
  ID: "01",
  FirstName: "Chirag",
  LastName: "Fabiyani",
  DateOfBirth: "11/02/2000"
}

const StudentInfo2 = {
  ID: "02",
  FirstName: "Vinod",
  LastName: "Meghani",
  DateOfBirth: "03/04/2000"
}

const StudentInfo3 = {
  ID: "03",
  FirstName: "Kirtan",
  LastName: "Patadia",
  DateOfBirth: "25/10/2000"
}

const CollegeInfo={
  CollegeName: "Ahmedabad Institute of Technology",
  CollegeAddress: "S.G Highway Gota",
  CollegeLogo: "AIT"
}



const App = () => {
  return (
    <section >
      <StudentIdCard ImageUrl={ImageUrl1} StudentInfo={StudentInfo1} CollegeInfo={CollegeInfo} />
      <StudentIdCard ImageUrl={ImageUrl2} StudentInfo={StudentInfo2} CollegeInfo={CollegeInfo} />
      <StudentIdCard ImageUrl={ImageUrl3} StudentInfo={StudentInfo3} CollegeInfo={CollegeInfo} />
    </section>
  );
}

const StudentIdCard = (props) => {
  const ImageUrl = props.ImageUrl;
  const StudentInfo = props.StudentInfo;
  const CollegeInfo = props.CollegeInfo;
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
