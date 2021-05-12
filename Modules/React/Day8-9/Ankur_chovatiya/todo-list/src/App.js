import './App.css';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/todoInput';
import Todolist from './components/todolist';



function App() {
  return (
    <div className="App">
      <TodoInput></TodoInput>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
