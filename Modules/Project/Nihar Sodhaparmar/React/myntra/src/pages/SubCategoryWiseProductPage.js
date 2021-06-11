// import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
import Product from "../components/Product";

import React, { Component } from "react";
import Filter from "../components/Filter";

export default class SubCategoryWiseProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: props.match.params.subCategory,
      category: props.match.params.category,
      loading: false,
      products: [],
      minPrice: 0,
      maxPrice: 0,
      price: 0,
      filteredProducts: [],
    };
  }

  getData = async () => {
    try {
      this.setState({ loading: true });
      let products = await ProductService.getAllProducts();
      products = products.data;
      products = products.filter(
        (product) =>
          product.category.categoryName.toLowerCase() ===
            this.state.category.toLowerCase() &&
          product.subCategory.subCategoryName.toLowerCase() ===
            this.state.subCategory.toLowerCase()
      );

      if (products.length == 0) {
        this.setState({
          filteredProducts: [],
          minPrice: 0,
          maxPrice: 0,
          price: 0,
          loading: false,
        });
      } else {
        let maxPrice = Math.max(...products.map((product) => product.price));

        let minPrice = Math.min(...products.map((product) => product.price));

        this.setState({
          products: products,
          filteredProducts: products,
          maxPrice: maxPrice,
          minPrice: minPrice,
          price: maxPrice,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  };

  componentWillReceiveProps(newProps) {
    this.setState(
      {
        subCategory: newProps.match.params.subCategory,
        category: newProps.match.params.category,
      },
      this.getData
    );
  }

  componentDidMount() {
    this.getData();
  }

  handleChange = async (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.sortProducts);
  };

  sortProducts = () => {
    let tempProducts = this.state.products;

    tempProducts = tempProducts.filter(
      (product) => parseInt(product.price) <= parseInt(this.state.price)
    );

    this.setState({ filteredProducts: tempProducts });
  };

  render() {
    const { loading, filteredProducts, price, minPrice, maxPrice } = this.state;
    if (loading) {
      return (
        <>
          <Navbar />
          <Loading />
        </>
      );
    }

    if (filteredProducts.length < 1) {
      return (
        <>
          <Navbar />
          <div className="container-fluid">
            <div className="row py-5">
              <div className="col-md-3 col-lg-2 border border-right-0">
                <Filter
                  price={price}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  handleChange={this.handleChange}
                />
              </div>
              <div className="col-md-9 col-lg-10 border py-4">
                {/* <div className="text-center pt-4 category-header text-uppercase">
                {category}
                </div> */}
                <div className="error-container my-5 text-center p-5 mx-auto">
                  <h1 className="text-capitalize text-center ">
                    no products available
                  </h1>
                  <Link
                    to="/"
                    className="btn btn-pink btn-lg text-capitalize mt-3"
                  >
                    back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-md-3 col-lg-2 border border-right-0">
              <Filter
                price={price}
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleChange={this.handleChange}
              />
            </div>
            <div className="col-md-9 col-lg-10 border">
              {/* <div className="text-center pt-4 category-header text-uppercase">
                    {category}
                  </div> */}
              <div className="row py-5">
                {filteredProducts.map((product) => {
                  return <Product key={product._id} product={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// export default function SubCategoryWiseProductPage(props) {
//   const subCategory = props.match.params.subCategory;
//   const category = props.match.params.category;
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setLoading(true);
//         let products = await ProductService.getAllProducts();
//         products = products.data;
//         products = products.filter(
//           (product) =>
//             product.category.categoryName.toLowerCase() ===
//               category.toLowerCase() &&
//             product.subCategory.subCategoryName.toLowerCase() ===
//               subCategory.toLowerCase()
//         );

//         setProducts(products);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.error(error);
//       }
//     }

//     getData();
//   }, [category, subCategory]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (products.length < 1) {
//     return (
//       <>
//         <Navbar />
//         <div className="container-fluid">
//           <div className="text-center pt-4 category-header text-uppercase">
//             {category}
//           </div>
//           <div className="error-container my-5 text-center p-5 mx-auto">
//             <h1 className="text-capitalize text-center ">
//               no products available
//             </h1>
//             <Link to="/" className="btn btn-pink btn-lg text-capitalize mt-3">
//               back to home
//             </Link>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container-fluid">
//         <div className="text-center pt-4 category-header text-uppercase">
//           {category}
//         </div>
//         <div className="row py-5">
//           {products.map((product) => {
//             return <Product key={product._id} product={product} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
