import logo from './logo.svg';
import './App.css';
import NameForm from './components/nameForm';
import TextArea from './components/textArea';
import SelectForm from './components/select';
import MultiInput from './components/multiInput';
import PersonList from './components/personList';
import Uncontrolled from './components/uncontrolled';

function App() {
  return (
    <div className="App">

      <Uncontrolled></Uncontrolled>
      {/* <PersonList></PersonList> */}
      {/* <MultiInput></MultiInput> */}
      {/* <NameForm></NameForm> */}
      {/* <TextArea></TextArea> */}
      {/* <SelectForm></SelectForm> */}
    </div>
  );
}

export default App;
