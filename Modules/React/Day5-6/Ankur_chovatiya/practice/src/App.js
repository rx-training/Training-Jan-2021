import logo from './logo.svg';
import './App.css';
import Event from './components/event';
import EventState from './components/eventState'
import ConditionalCompt from './components/conditionalCompt';
import ConditionCompt2 from './components/conditionCompt2';
import Logical from './components/logical';
import Booklist from './components/Booklist';
import Calculator from './components/Calculator';
import Calc from './components/Calc';

function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    <div className="App">
      <Calc></Calc>
    {/* <Calculator></Calculator> */}
    {/* <Booklist></Booklist> */}

      {/* <ConditionalCompt isLoggedIn={false}></ConditionalCompt>
      <ConditionCompt2></ConditionCompt2>
      <Logical unreadMessages={messages} ></Logical> */}
     {/* <Event></Event> */}
     {/* <EventState></EventState> */}
    </div>
  );
}

export default App;
