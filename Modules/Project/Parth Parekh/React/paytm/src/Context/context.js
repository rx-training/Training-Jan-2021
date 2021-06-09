import React, { useState } from "react";

const ProductContext = React.createContext();

const ProductProvider = (props) => {
    /**********************  Products  ************************/
    const [productData, setProductData] = useState([]);

    /**********************  Featured Mobile  ************************/
    const [featuredMobile, setFeaturedMobile] = useState([]);

    /**********************  Featured Fashion  ************************/
    const [featuredFashion, setFeaturedFashion] = useState([]);

    /**********************  Featured Electronics  ************************/
    const [featuredElct, setFeaturedElct] = useState([]);

    //All Category Data
    const [electronicsData, setElectronics] = useState([]);
    const [mobileData, setMobileData] = useState([]);
    const [fashionData, setFashionData] = useState([]);

    return (
        <ProductContext.Provider
            value={{
                productData,
                featuredMobile,
                featuredFashion,
                featuredElct,

                mobileData,
                fashionData,
                electronicsData,

                setProductData,
                setFeaturedMobile,
                setFeaturedFashion,
                setFeaturedElct,
                setMobileData,
                setFashionData,
                setElectronics,
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};
export { ProductContext, ProductProvider };
