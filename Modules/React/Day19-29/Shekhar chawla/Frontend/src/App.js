import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




import Navbar from './components/Navbar'
import Home from './pages/Home'
// import SingleCar from './pages/SingleCar'
// import FindNewCars from './pages/New Cars/FindNewCars'
// import CheckOnRoadPrice from './pages/New Cars/CheckOnRoadPrice'
import Admin from './components/Admin/Admin'

import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />

      <div className="">
        <Switch>
          <Route path="/" exact component={Home} ></Route>
        </Switch>
        {/* <SingleCar /> */}
        {/* <FindNewCars /> */}
        {/* <CheckOnRoadPrice /> */}

        <Admin />

      </div>

      <Footer />
    </Router>
  );
}

export default App;
