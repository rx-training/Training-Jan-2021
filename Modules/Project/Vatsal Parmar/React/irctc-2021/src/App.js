import "./App.css";
import { Route, Switch } from "react-router-dom";
//pages
import TrainSearch from "./pages/TrainSearch";
import TrainList from "./pages/TrainList";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Pnr from "./pages/Pnr";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Ticket from "./pages/Ticket";
import User from "./pages/User";
import MyBookings from "./pages/MyBookings";
import EditProfile from "./pages/EditProfile";
//admin panel pages
import Dashboard from "./pages/Admin/Dashboard";
import TrainForm from "./pages/Admin/TrainForm";
import Stations from "./pages/Admin/Stations";
import StationForm from "./pages/Admin/StationForm";
import TrainRoutes from "./pages/Admin/TrainRoutes";
import TrainRoutesForm from "./pages/Admin/TrainRoutesForm";
import Status from "./pages/Admin/Status";
import StatusForm from "./pages/Admin/StatusForm";
import Users from "./pages/Admin/Users";
import Pnrs from "./pages/Admin/Pnrs";
import PnrDetails from "./pages/Admin/PnrDetails";
//nav bar
import MainNav from "./components/Navbar";
//footer
import Footer from "./components/Footer";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";

function App() {
  return (
    <div className="container-fluid">
      <MainNav />
      <Switch>
        <Route exact path="/" component={TrainSearch} />
        <Route exact path="/trains" component={TrainList} />
        <PrivateRoute exact path="/trains/:id" component={Booking} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <Route exact path="/pnr" component={Pnr} />
        <PrivateRoute exact path="/payment" component={Payment} />
        <Route exact path="/ticket/:id" component={Ticket} />
        <PrivateRoute exact path="/user" component={User} />
        <PrivateRoute exact path="/user/bookings/:id" component={MyBookings} />
        <PrivateRoute exact path="/user/edit/:id" component={EditProfile} />
        {/* Admin Side Pages */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/dashboard/trains/:id"
          component={TrainForm}
        />
        <PrivateRoute exact path="/dashboard/stations" component={Stations} />
        <PrivateRoute
          exact
          path="/dashboard/stations/:id"
          component={StationForm}
        />
        <PrivateRoute
          exact
          path="/dashboard/train-routes"
          component={TrainRoutes}
        />
        <PrivateRoute
          exact
          path="/dashboard/train-routes/:id"
          component={TrainRoutesForm}
        />
        <PrivateRoute exact path="/dashboard/status" component={Status} />
        <PrivateRoute
          exact
          path="/dashboard/status/:id"
          component={StatusForm}
        />
        <PrivateRoute exact path="/dashboard/users" component={Users} />
        <PrivateRoute exact path="/dashboard/pnrs" component={Pnrs} />
        <PrivateRoute exact path="/dashboard/pnrs/:id" component={PnrDetails} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
