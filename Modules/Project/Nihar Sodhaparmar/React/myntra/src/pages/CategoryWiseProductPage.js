// import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";

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

          this.setState({
            products: categoryProducts,
            filteredProducts: categoryProducts,
            maxPrice: maxPrice,
            minPrice: minPrice,
            price: maxPrice,
            loading: false,
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

  sortProducts = () => {
    let tempProducts = this.state.products;

    tempProducts = tempProducts.filter(
      (product) => parseInt(product.price) <= parseInt(this.state.price)
    );

    this.setState({ filteredProducts: tempProducts });
  };

  render() {
    const { loading, minPrice, maxPrice, price, filteredProducts } = this.state;

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
            <div className="col-md-9 col-lg-10 border py-4">
              {/* <div className="text-center pt-4 category-header text-uppercase">
                    {category}
                   </div> */}
              <div className="row">
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
