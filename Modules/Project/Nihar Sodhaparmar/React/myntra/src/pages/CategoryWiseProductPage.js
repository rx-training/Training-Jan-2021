// import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import { FaSlidersH, FaTimes } from "react-icons/fa";
import React, { Component } from "react";

export default class CategoryWiseProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.match.params.category,
      products: [],
      loading: false,
      minPrice: 0,
      maxPrice: 0,
      price: 0,
      filteredProducts: [],
      sortOrder: "",
      brands: [],
      isFiltershow: false,
    };
  }

  getData = async () => {
    try {
      this.setState({ loading: true });
      let res = await ProductService.getAllProducts();
      const products = res.data;
      if (products.length < 1) {
        this.setState({ products: [], loading: false });
      } else {
        const categoryProducts = products.filter((product) => {
          return (
            product.category.categoryName.toLowerCase() ===
            this.state.category.toLowerCase()
          );
        });

        if (categoryProducts.length === 0) {
          this.setState({
            filteredProducts: [],
            minPrice: 0,
            maxPrice: 0,
            price: 0,
            loading: false,
          });
        } else {
          let maxPrice = Math.max(
            ...categoryProducts.map((product) => product.price)
          );

          let minPrice = Math.min(
            ...categoryProducts.map((product) => product.price)
          );

          let brands = new Set();
          for (let product of categoryProducts) {
            brands.add(product.brand.brandName);
          }
          brands = [...brands];
          let newBrands = [];
          for (let brand of brands) {
            newBrands.push({ name: brand, isChecked: false });
          }

          this.setState({
            products: categoryProducts,
            filteredProducts: categoryProducts,
            maxPrice: maxPrice,
            minPrice: minPrice,
            price: maxPrice,
            loading: false,
            brands: newBrands,
          });
        }
      }
    } catch (error) {
      this.setState({ loading: false });
      console.error(error.message);
    }
  };

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ category: newProps.match.params.category }, this.getData);
  }

  handleChange = async (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.sortProducts);
  };

  brandChange = (i) => {
    this.setState((state, props) => {
      state.brands[i].isChecked = !state.brands[i].isChecked;
      return {
        brands: state.brands,
      };
    }, this.sortProducts);
  };

  sortProducts = () => {
    let tempProducts = this.state.products;
    const { price, sortOrder, brands } = this.state;

    tempProducts = tempProducts.filter(
      (product) => parseInt(product.price) <= parseInt(price)
    );

    if (sortOrder === "ascending") {
      tempProducts.sort(this.sortProductsAscending("price"));
    } else if (sortOrder === "descending") {
      tempProducts.sort(this.sortProductsDescending("price"));
    }

    let newTempProducts = [];
    let oneChecked = false;

    for (let brand of brands) {
      if (brand.isChecked === true) {
        oneChecked = true;
        let tempProductsArray = tempProducts.filter(
          (product) =>
            product.brand.brandName.toLowerCase() === brand.name.toLowerCase()
        );
        newTempProducts = newTempProducts.concat(tempProductsArray);
      }
    }

    if (oneChecked) {
      tempProducts = newTempProducts;
    }

    this.setState({ filteredProducts: tempProducts });
  };

  sortProductsAscending = (field) => {
    return function (a, b) {
      if (a[field] > b[field]) {
        return 1;
      } else if (a[field] < b[field]) {
        return -1;
      }
      return 0;
    };
  };

  sortProductsDescending = (field) => {
    return function (a, b) {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      }
      return 0;
    };
  };

  render() {
    const {
      loading,
      minPrice,
      maxPrice,
      price,
      filteredProducts,
      brands,
      isFiltershow,
    } = this.state;

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
            <div className="row">
              <div className="d-md-none">
                <div className="filter-dropdown mt-2 fixed-bottom">
                  <div
                    className="btn btn-block bg-white border-radius-0 border filter-dropdown-btn py-2"
                    onClick={() => {
                      this.setState({ isFiltershow: !isFiltershow });
                    }}
                  >
                    <FaSlidersH className="pt-1" />{" "}
                    <span
                      style={{
                        fontSize: "18px",
                        letterSpacing: "1px",
                        fontWeight: "500",
                      }}
                    >
                      Filter
                    </span>
                    <span>
                      {isFiltershow ? <FaTimes className="pt-2" /> : ""}
                    </span>
                  </div>
                  <div
                    className={`border filter-dropdown-menu bg-white ${
                      isFiltershow ? "show" : "hide"
                    }`}
                  >
                    <div className="filter-dropdown-item">
                      <Filter
                        price={price}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        handleChange={this.handleChange}
                        brands={brands}
                        brandChange={this.brandChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2 border border-right-0 my-5 py-5 d-none d-md-block">
                <Filter
                  price={price}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  handleChange={this.handleChange}
                  brands={brands}
                  brandChange={this.brandChange}
                />
              </div>
              <div className="col-md-9 col-lg-10 border py-4 margin-on-md">
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
          <div className="row">
            <div className="d-md-none">
              <div className="filter-dropdown mt-2 fixed-bottom">
                <div
                  className="btn btn-block bg-white border-radius-0 border filter-dropdown-btn py-2"
                  onClick={() => {
                    this.setState({ isFiltershow: !isFiltershow });
                  }}
                >
                  <FaSlidersH className="pt-1" />{" "}
                  <span
                    style={{
                      fontSize: "18px",
                      letterSpacing: "1px",
                      fontWeight: "500",
                    }}
                  >
                    Filter
                  </span>
                  <span>
                    {isFiltershow ? <FaTimes className="pt-2" /> : ""}
                  </span>
                </div>
                <div
                  className={`border filter-dropdown-menu bg-white ${
                    isFiltershow ? "show" : "hide"
                  }`}
                >
                  <div className="filter-dropdown-item">
                    <Filter
                      price={price}
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                      handleChange={this.handleChange}
                      brands={brands}
                      brandChange={this.brandChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 border border-right-0 my-5 py-5 d-none d-md-block">
              <Filter
                price={price}
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleChange={this.handleChange}
                brands={brands}
                brandChange={this.brandChange}
              />
            </div>
            <div className="col-md-9 col-lg-10 border margin-on-md py-2">
              {/* <div className="text-center pt-4 category-header text-uppercase">
                    {category}
                   </div> */}
              <div className="row margin-on-md">
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

// export default function CategoryWiseProductPage(props) {
//   const [category] = useState(props.match.params.category);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [filterData, setFilterData] = useState({ price: 0 });
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setLoading(true);
//         let res = await ProductService.getAllProducts();
//         const products = res.data;
//         if (products.length < 1) {
//           setProducts([]);
//         } else {
//           const categoryProducts = products.filter((product) => {
//             return (
//               product.category.categoryName.toLowerCase() ===
//               category.toLowerCase()
//             );
//           });

//           if (categoryProducts.length === 0) {
//             setFilteredProducts([]);
//             setMinPrice(0);
//             setMaxPrice(0);
//           } else {
//             setProducts(categoryProducts);
//             setFilteredProducts(categoryProducts);

//             let maxPrice = Math.max(
//               ...categoryProducts.map((product) => product.price)
//             );
//             setMaxPrice(maxPrice);
//             setFilterData({ ...filterData, price: maxPrice });

//             let minPrice = Math.min(
//               ...categoryProducts.map((product) => product.price)
//             );
//             setMinPrice(minPrice);
//           }
//         }
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.error(error.message);
//       }
//     }

//     getData();
//   }, [category]);

//   const handleChange = async (event) => {
//     const { name, value } = event.target;
//     setFilterData({ ...filterData, [name]: value });
//     sortProducts();
//   };

//   const sortProducts = () => {
//     let tempProducts = products;
//     console.log(price);
//     tempProducts = tempProducts.filter(
//       (product) => parseInt(product.price) <= parseInt(price)
//     );

//     setFilteredProducts(tempProducts);
//   };

//   const { price } = filterData;

//   if (loading) {
//     return <Loading />;
//   }

//   if (filteredProducts.length < 1) {
//     return (
//       <>
//         <Navbar />
//         <div className="container-fluid">
//           <div className="row py-5">
//             <div className="col-md-3 col-lg-2 border border-right-0">
//               <Filter
//                 price={price}
//                 minPrice={minPrice}
//                 maxPrice={maxPrice}
//                 handleChange={handleChange}
//               />
//             </div>
//             <div className="col-md-9 col-lg-10 border py-4">
//               {/* <div className="text-center pt-4 category-header text-uppercase">
//               {category}
//             </div> */}
//               <div className="error-container my-5 text-center p-5 mx-auto">
//                 <h1 className="text-capitalize text-center ">
//                   no products available
//                 </h1>
//                 <Link
//                   to="/"
//                   className="btn btn-pink btn-lg text-capitalize mt-3"
//                 >
//                   back to home
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container-fluid">
//         {/* <div className="text-center pt-4 category-header text-uppercase">
//           {category}
//         </div> */}
//         <div className="row py-5">
//           <div className="col-md-3 col-lg-2 border border-right-0">
//             <Filter
//               price={price}
//               minPrice={minPrice}
//               maxPrice={maxPrice}
//               handleChange={handleChange}
//             />
//           </div>
//           <div className="col-md-9 col-lg-10 border py-4">
//             <div className="row">
//               {filteredProducts.map((product) => {
//                 return <Product key={product._id} product={product} />;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
