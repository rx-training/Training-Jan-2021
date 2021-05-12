import logo from './logo.svg';
import './App.css';
import StudentsIdCard from './components/studentsList';
import Books from './components/books';

function App() {
  return (
    <div className="App">
      <Books></Books>
      <StudentsIdCard></StudentsIdCard>
    </div>
  );
}

export default App;
