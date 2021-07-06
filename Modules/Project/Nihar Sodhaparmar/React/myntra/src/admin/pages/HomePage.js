import React from "react";
import Navbar from "../components/Navbar";
import {
  FaUserCircle,
  FaProductHunt,
  FaCopyright,
  FaCheckCircle,
  FaMonero,
  FaBootstrap,
} from "react-icons/fa";
import DashboardColumn from "../components/HomePage/DahboardColumn";
import { useEffect, useState } from "react";
import { getToken, removeUserSession } from "../../utils/Storage";
import Loading from "../../components/Loading";
import ProductService from "../../services/ProductService";
import CustomerService from "../../services/CustomerService";
import OrderService from "../../services/OrderService";
import MainCategoryService from "../../services/MainCategoryService";
import CategoryService from "../../services/CategoryService";
import BrandService from "../../services/BrandService";

export default function HomePage(props) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [mainCategories, setMainCategories] = useState(0);
  const [categories, setCategories] = useState(0);
  const [brands, setBrands] = useState(0);

  async function getData() {
    try {
      setLoading(true);

      let products = await ProductService.getAllProducts();
      setProducts(products.data.length);

      let users = await CustomerService.getAllCustomers(getToken());
      setUsers(users.data.length);

      let orders = await OrderService.getAllOrders(getToken());
      setOrders(orders.data.length);

      let mainCategories = await MainCategoryService.getAllMainCategories();
      setMainCategories(mainCategories.data.length);

      let categories = await CategoryService.getAllCategories();
      setCategories(categories.data.length);

      let brands = await BrandService.getAllBrands();
      setBrands(brands.data.length);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 403 || error.response.status === 401) {
        props.history.push("/dashboard/login");
        removeUserSession();
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-5">
          <DashboardColumn
            link="/dashboard/products"
            numbers={products}
            title="products"
            icon={<FaProductHunt className="dasboard-icon" />}
          />

          <DashboardColumn
            link="/dashboard/users"
            numbers={users}
            title="users"
            icon={<FaUserCircle className="dasboard-icon" />}
          />

          <DashboardColumn
            link="/dashboard/orders"
            numbers={orders}
            title="orders"
            icon={<FaCheckCircle className="dasboard-icon" />}
          />

          <DashboardColumn
            link="/dashboard/main-categories"
            numbers={mainCategories}
            title="maincategories"
            icon={<FaMonero className="dasboard-icon" />}
          />

          <DashboardColumn
            link="/dashboard/categories"
            numbers={categories}
            title="categories"
            icon={<FaCopyright className="dasboard-icon" />}
          />

          <DashboardColumn
            link="/dashboard/brands"
            numbers={brands}
            title="brands"
            icon={<FaBootstrap className="dasboard-icon" />}
          />
        </div>
      </div>
    </>
  );
}
