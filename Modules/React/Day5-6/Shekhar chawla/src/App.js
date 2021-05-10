import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import HandsOnFromSite from './components/practice/ReactSite/HandsOnFromSite'
import BookMini from './components/practice/Videos/Book mini/BookList'

import Assignment1 from './components/assignment/1/StudentList'
import Assignment2 from './components/assignment/2/toggle'


function App() {
  return (
    <div className="App container-fluid bg-dark text-white">
      <div className="container py-4">

        


        {/* Practice components */}
        <p className="display-3">React site</p>
        <HandsOnFromSite /> <hr />
        <p className="display-3">BookMini</p>
        <BookMini /> <hr />

        {/* Assignment components */}
        <p className="display-3">Assignments</p>
        <Assignment1 />
        <Assignment2 />






      </div>
    </div>
  );
}

export default App;
