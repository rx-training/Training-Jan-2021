import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AddMoney from "./pages/AddMoney";
import Passbook from "./pages/Passbook";
import Error from "./pages/Error";
import MoneyTransfer from "./pages/MoneyTransfer";

import Navbars from "./components/Navbar&Footer/Navbars";
import Footer from "./components/Navbar&Footer/Footer";
import Service from "./components/ServicesPage/Service";
import Products from "./components/ProductPage/Products";
import SingleProduct from "./components/ProductPage/SingleProduct";
import { ProductProvider } from "./Context/context";
import LoginModal from "./components/Login&SignUp/LoginModal";
import SignUpModal from "./components/Login&SignUp/SignUpModal";
import Payment from "./pages/payment";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PubliceRoute";
import { getToken, getUserId } from "./Utils/Common";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/Admin/AdminPage";
import UserData from "./pages/Admin/UserData";
import AddProducts from "./pages/Admin/AddProducts";
import CategoryForm from "./pages/Admin/CategoryForm";
import ProductForm from "./pages/Admin/ProductForm";
import AddCategory from "./pages/Admin/AddCategory";
import AllCateProducts from "./components/ProductPage/AllCateProducts";

function App(props) {
    return (
        <ProductProvider>
            <div className="container-fuild">
                <Router>
                    {!getToken() && !getUserId() ? (
                        <Navbars login={true} signup={true} logout={false} />
                    ) : (
                        <Navbars logout={true} login={false} signup={false} />
                    )}

                    {/* Switch is used to show first exact match path */}
                    <Switch>
                        <Route exact path="/" component={Home}></Route>

                        {/* PublicRoute ,are Routes that can access by all ,but after login user ,it can not access */}

                        <PublicRoute path="/login" component={LoginModal} />
                        <PublicRoute path="/signup" component={SignUpModal} />

                        {/* PrivateRoute are Routes only access by login  */}
                        <PrivateRoute path="/addmoney" component={AddMoney} />
                        <PrivateRoute
                            path="/transfermoney"
                            component={MoneyTransfer}
                        />
                        <PrivateRoute path="/passbook" component={Passbook} />

                        <PrivateRoute path="/payment/:id" component={Payment} />
                        <PrivateRoute path="/profile" component={ProfilePage} />

                        <Route exact path="/product/:id" component={Products} />
                        <Route
                            exact
                            path="/products"
                            component={AllCateProducts}
                        />
                        <Route
                            exact
                            path="/product/:id/:productid"
                            component={SingleProduct}
                        />

                        <Route path="/admin" component={AdminPage} />
                        <Route path="/userdata" component={UserData} />

                        <Route path="/addproducts" component={AddProducts} />
                        <Route path="/addcategory" component={AddCategory} />
                        <Route path="/newproduct/:id" component={ProductForm} />
                        <Route
                            exact
                            path="/category/:id"
                            component={CategoryForm}
                        />

                        <Route path="*" component={Error} />
                    </Switch>
                    {/****************   SERVICES    ****************/}
                    <Service />
                    <Footer />
                </Router>
            </div>
        </ProductProvider>
    );
}
export default App;
