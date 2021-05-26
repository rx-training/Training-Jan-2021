import Student from './components/Student';
import {BrowserRouter as  Router , Route , Switch} from 'react-router-dom'
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

function App() {
  return (
    <Router>
      <div className="App">
          <Student></Student>
      </div>
    </Router>
  );
}

export default App;
