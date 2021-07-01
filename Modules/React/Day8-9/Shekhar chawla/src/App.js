import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.scss';
import PersonList1 from './components/Practice/Videos/PropTypes'
import PersonList2 from './components/Practice/Videos/ObjectWithShape'
import Form1 from './components/Practice/Videos/FormControlledInput'
import Form2 from './components/Practice/Videos/FormUncontrolledInput'
import AsyncSetState from './components/Practice/Videos/AsyncSetState'
import TodoList from './components/Practice/TodoList/TodoList'
import StudentForm from './components/Assignment/StudentForm'

function App() {
  return (
    <div className="container">

      {/* Practice Exercises */}
      <div>
        <p className="display-3">Videos</p>

        <div className="practice">
          <h5>PropTypes</h5>          <PersonList1 />
        </div>
        <div className="practice">
          <h5>Default Proptypes</h5>  <PersonList2 />
        </div>
        <div className="practice">
          <h5>Controlled form</h5>    <Form1 />
        </div>
        <div className="practice">
          <h5>Uncontrolled form</h5>  <Form2 />
        </div>
        <div className="practice">
          <h5>Async setState</h5>     <AsyncSetState />
        </div>

        <p className="display-3 mt-5">TodoList</p>
        <TodoList />

        <p className="display-3 mt-5">StudentForm</p>
        <StudentForm />
      </div>

    </div>
  )
}

export default App;
