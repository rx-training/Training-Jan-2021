import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import HandsOnFromSite from './components/practice/ReactSite/HandsOnFromSite'

import Assignment1 from './components/assignment/1/StudentList'


function App() {
  return (
    <div className="App">

      {/* Practice components */}
      <p className="display-3">React site</p>
      <HandsOnFromSite /> <hr />

      {/* Assignment components */}
      <p className="display-3">Assignments</p>
      <Assignment1 />
    </div>
  );
}

export default App;
