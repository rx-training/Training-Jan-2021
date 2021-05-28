import "./App.css"

const App = () => {
  return (
    <section >
      <StudentIdCard />
    </section>
  );
}


const StudentIdCard = () => {
  return(
    <section className = "App">
      <Image />
      <Personal /> 
      <College />     
    </section>
  )
}

const imageStyle = {
  marginTop: "2%"
}

const Image = () => {
  return(
    <section>
      <img style={imageStyle} width="200" src="https://picsum.photos/536/354" alt="Student Image" />
      <hr />
    </section>
  )
}

const Personal = () => {
  return(
    <section>
      <p>ID: 01</p>
      <p>FirstName: Chirag</p>
      <p>LastName: Fabiyani</p>
      <p>DateOfBirth: 11/02/2000</p>
      <hr />
    </section>
  )
}

const College = () => {
  return(
    <section>
      <p>CollegeName: Ahmedabad Institute of Technology</p>
      <p>CollegeAddress: S.G Highway Gota</p>
      <p>CollegeLogo: AIT</p>
      <hr />
    </section>
  )
}

export default App;
