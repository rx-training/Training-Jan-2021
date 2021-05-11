import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/greet'; // when i not export as default
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Clock from './components/clock';
import Books from './components/book';

function App() {
  return (
    <div className="App">
      <Books></Books>
    {/* <Greet></Greet>
    <Welcome name="Ankur" role="node"></Welcome>
    <Hello name="Ankur" role="node"> <p>He also Can do MongoBD and MS Sql Server</p></Hello>
    <Hello name="Anks" role="js"></Hello>
    <Hello name="Anku" role="React"></Hello>
    <Clock></Clock> */}
    </div>
  );
}

export default App;
