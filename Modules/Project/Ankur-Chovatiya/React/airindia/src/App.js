import './App.scss';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
// import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Navbar from './components/NavbarComp';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Gst from './pages/Gst';
import SpecialOffer from './pages/SpecialOffer';
import FlightList from './components/FlightList';
import Passengers from './components/Passengers';
import Seatmap from './components/Seatmap';
import PaymentReview from './components/PaymentReview'
import TicketConfirm from './components/TicketConfirm';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Navbar></Navbar>
        <Switch>

          <Route exact path="/" component={Login}></Route>
          <Route path="/AirIndia" exact component={Home}></Route>
          <Route path="/AirIndia/select" exact component={FlightList}></Route>
          <Route path="/AirIndia/passengers-details" exact component={Passengers}></Route>
          <Route path="/AirIndia/seatmap" component={Seatmap}></Route>
          <Route path="/AirIndia/paymentReview" component={PaymentReview}></Route>
          <Route path="/AirIndia/success" component={TicketConfirm}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/GST" component={Gst}></Route>
          <Route path="/special-offers" component={SpecialOffer}></Route>
          <Route path="/Register" component={Register} ></Route>
          <Route path="/login" component={Login} ></Route>
          <Route path="*" component={Error}></Route>
        
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
