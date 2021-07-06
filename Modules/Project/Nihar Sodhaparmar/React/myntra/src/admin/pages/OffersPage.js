import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductService from "../../services/ProductService";
import Loading from "../../components/Loading";
import SearchContainer from "../components/OffersPage/SearchContainer";
import EmptyBanner from "../components/EmptyBanner";
import Product from "../components/OffersPage/Product";
import { Modal } from "react-bootstrap";
import { getToken, removeUserSession } from "../../utils/Storage";
import { NotificationManager } from "react-notifications";

export default function OffersPage(props) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [oldOffer, setOldOffer] = useState("");
  const [offer, setOffer] = useState("");
  const [id, setId] = useState("");
  const [offerError, setOfferError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let products = await ProductService.getAllProducts();
        setProducts(products.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getData();
  }, []);

  const handleChange = (event) => {
    let { value } = event.target;
    setSearchValue(value);
  };

  const search = (event) => {
    event.preventDefault();
    if (searchValue === "") {
      setError("Enter Brand name or Category name to search");
      return;
    }

    let filteredProducts = products.filter(
      (product) =>
        product.brand.brandName.toLowerCase() === searchValue.toLowerCase() ||
        product.category.categoryName.toLowerCase() ===
          searchValue.toLowerCase()
    );

    setFilteredProducts(filteredProducts);
    setError("");
    setIsSearched(true);
  };

  const closeModel = () => {
    setShowModal(false);
    setOffer("");
  };

  const offerChange = (event) => {
    const { value: newValue, type } = event.target;
    const value = type === "number" ? +newValue : newValue;
    setOffer(value);
  };

  const applyOfferBtnClick = (id, oldOffer) => {
    setShowModal(true);
    setOldOffer(oldOffer);
    setId(id);
  };

  const applyOffer = async () => {
    if (offer === "") {
      setOfferError("Offer must be greater than zero");
      return;
    }
    let product = products.find((product) => product._id === id);
    product.offer = offer;
    try {
      setLoading(true);
      await ProductService.updateProduct(id, product, getToken());
      NotificationManager.success("Offer applied successfully", "", 2000);
      setShowModal(false);
      setOffer("");
      setOfferError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      if (error.response.status === 403 || error.response.status === 401) {
        props.history.push("/dashboard/login");
        removeUserSession();
      }
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  if (isSearched && filteredProducts.length === 0) {
    return (
      <>
        <Navbar />
        <SearchContainer
          handleChange={handleChange}
          search={search}
          error={error}
        />
        <EmptyBanner title="no products matched with your criteria" />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <SearchContainer
        handleChange={handleChange}
        search={search}
        error={error}
      />

      <div className="container-fluid mb-5">
        <div className="row">
          {filteredProducts.map((product) => {
            return (
              <Product
                product={product}
                applyOfferBtnClick={applyOfferBtnClick}
                key={product._id}
              />
            );
          })}
        </div>
      </div>

      {/* ------------------------------- APPLY OFFER MODAL ------------------------------- */}
      <Modal show={showModal} size="lg" onHide={closeModel}>
        <Modal.Header className="bg-primary text-white border">
          <Modal.Title>Apply Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label className="form-control-label" htmlFor="oldoffer">
              Old Offer
            </label>
            <input
              type="number"
              className="form-control login-form-control"
              id="oldoffer"
              name="oldoffer"
              value={oldOffer}
              disabled
            />
          </div>
          <div className="form-group">
            <label className="form-control-label" htmlFor="offer">
              New Offer
            </label>
            <input
              type="number"
              className="form-control login-form-control"
              id="offer"
              name="offer"
              onChange={offerChange}
              value={offer}
            />
            <p className="text-danger font-weight-bold mt-2">{offerError}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary btn-radius-0"
            onClick={closeModel}
          >
            Close
          </button>
          <button className="btn btn-primary btn-radius-0" onClick={applyOffer}>
            Apply Offer
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
