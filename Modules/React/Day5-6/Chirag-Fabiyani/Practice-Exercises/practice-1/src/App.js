import Toggle from './Toggle';
import LoginControl from './LoginControl'
import Calculator from './Calculator'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="w-50 mt-5 mx-auto border">
      <Toggle />
      <hr />
      <LoginControl />
      <hr />
      <Calculator />
    </div>
  );
}

export default App;
