import './App.scss';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import  Navbar  from './components/Users/Navbar';
import { Home } from './pages/User/Home';
import {BusResult} from './pages/User/BusResult'
import { Error } from './pages/User/Error';
import RedbusProvider from './context/context';
import { SelectedBus } from './pages/User/SelectedBus';
import { Profile } from './pages/User/Profile';
import { AdminHome } from './pages/Admin/AdminHome';
import { AdminNavbar } from './components/Admin/AdminNavbar';
import { AdminLogin } from './pages/Admin/AdminLogin';
import { Operators } from './pages/Admin/Operators';
import { Buses } from './pages/Admin/Buses';
import { Users } from './pages/Admin/Users';
import { Trip } from './pages/Admin/Trip';
import { SingleTrip } from './pages/Admin/SingleTrip';
import { SingleUser } from './pages/Admin/SingleUser';
import { OperatorNavbar } from './components/Operator/OperatorNavbar';
import { OperatorHome } from './pages/Operator/OperatorHome';
import { OpLogin } from './pages/Operator/OpLogin';
import { Alert } from './components/Users/Alert';
import { OpBuses } from './pages/Operator/OpBuses';
import { OpRoute } from './pages/Operator/OpRoute';

function App() {
   return (
      <Router>
         <RedbusProvider>
            <Alert />
            <Switch>
               <Route  path='/user' component={Navbar} /> 
               <Route path='/admin' component={AdminNavbar} />
               <Route path='/operator' component={OperatorNavbar} />
            </Switch>
            <Switch>
               <Route exact path="/">
                  <Navbar />
                  <Home />
               </Route>
               
               <Route path="/user/bus-results/:fromCity/:toCity/:date" component={BusResult} /> 
               <Route path='/user/profile' exact component={Profile} /> 
               <Route path='/user/:id/selected-bus/:routeid' exact component={SelectedBus}  />

               <Route path="/admin" exact component={AdminHome} />
               <Route path="/admin/login" component={AdminLogin} />
               <Route path="/admin/users" component={Users} />
               <Route path="/admin/buses" component={Buses} />
               <Route path="/admin/operators" component={Operators} />
               <Route path="/admin/trips" component={Trip} />
               <Route path="/admin/trip/:id" component={SingleTrip} />
               <Route path="/admin/user/:id" component={SingleUser} />

               <Route path="/operator" exact component={OperatorHome} />
               <Route path="/operator/login" exact component={OpLogin} />
               <Route path="/operator/buses" exact component={OpBuses} />
               <Route path="/operator/routes" exact component={OpRoute} />


               <Router path="*" component={Error} />
            </Switch>
         </RedbusProvider>
      </Router>  
   )
}

export default App;
