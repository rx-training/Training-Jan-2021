import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./AdminApp.css";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import AdminRoute from "./utils/AdminRoute";
import { getToken, removeUserSession } from "./utils/Storage";
import LoginService from "./services/LoginService";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

// import components
import Footer from "./components/Footer";

// import pages
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import CategoryWiseProductPage from "./pages/CategoryWiseProductPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import WishlistPage from "./pages/WishlistPage";
import BagPage from "./pages/BagPage";
import OrdersPage from "./pages/OrdersPage";
import RegisterPage from "./pages/RegisterPage";
import Logout from "./components/Logout";
import EditProfilePage from "./pages/EditProfilePage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";

// import admin pages
import ProductsPage from "./admin/pages/ProductsPage";
import SingleProductPage from "./admin/pages/SingleProductPage";
import UpdateProductPage from "./admin/pages/UpdateProductPage";
import AddProductPage from "./admin/pages/AddProductPage";
import CategoryPage from "./admin/pages/CategoryPage";
import BrandsPage from "./admin/pages/BrandsPage";
import OffersPage from "./admin/pages/OffersPage";
import MainCategoriesPage from "./admin/pages/MainCategoriesPage";
import MainCategoryWiseProductPage from "./pages/MainCategoryWiseProductPage";
import UsersPage from "./admin/pages/UsersPage";
import AdminRegisterPage from "./admin/pages/RegisterPage";
import AdminLoginPage from "./admin/pages/LoginPage";
import UserOrdersPage from "./admin/pages/UserOrdersPage";
import AdminHomePage from "./admin/pages/HomePage";
import AdminOrdersPage from "./admin/pages/OrdersPage";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    LoginService.verify()
      .then((response) => {
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <Loading />;
  }

  return (
    <Router>
      <NotificationContainer />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/logout" component={Logout} />
        <PublicRoute path="/register" component={RegisterPage} />
        <PublicRoute path="/forget-password" component={ForgetPasswordPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <PrivateRoute path="/edit" component={EditProfilePage} />
        <PrivateRoute path="/wishlist" component={WishlistPage} />
        <PrivateRoute path="/bag" component={BagPage} />
        <PrivateRoute path="/orders" component={OrdersPage} />
        <Route path="/category/:category" component={CategoryWiseProductPage} />
        <Route
          path="/main-category/:mainCategory/:category"
          component={MainCategoryWiseProductPage}
        />
        {/* *************** */}
        <AdminRoute exact path="/dashboard" component={AdminHomePage} />
        <AdminRoute exact path="/dashboard/products" component={ProductsPage} />
        <AdminRoute
          path="/dashboard/products/:id"
          component={SingleProductPage}
        />
        <AdminRoute
          path="/dashboard/update-product/:id"
          component={UpdateProductPage}
        />
        <AdminRoute path="/dashboard/add-product" component={AddProductPage} />
        <AdminRoute
          exact
          path="/dashboard/categories"
          component={CategoryPage}
        />
        <AdminRoute path="/dashboard/brands" component={BrandsPage} />
        <AdminRoute path="/dashboard/offers" component={OffersPage} />
        <AdminRoute
          path="/dashboard/main-categories"
          component={MainCategoriesPage}
        />
        <AdminRoute exact path="/dashboard/users" component={UsersPage} />
        <AdminRoute
          path="/dashboard/users/orders/:id"
          component={UserOrdersPage}
        />
        <AdminRoute path="/dashboard/orders/" component={AdminOrdersPage} />
        <AdminRoute
          exact
          path="/dashboard/register"
          component={AdminRegisterPage}
        />
        <Route exact path="/dashboard/login" component={AdminLoginPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
