import React, { useContext, useEffect } from "react";

import PaytmServices from "../Services/paytmServices";
import Mobiles from "../components/ProductPage/Mobiles";
import Fashion from "../components/ProductPage/Fashion";
import Electronics from "../components/ProductPage/Electronics";
import Slider from "../components/dummyPage/Slider";
import { ProductContext } from "../Context/context";
import Links from "../components/dummyPage/Links";

export default function Home(props) {
    const value = useContext(ProductContext);

    const {
        featuredMobile,
        featuredFashion,
        featuredElct,
        setProductData,
        setFeaturedMobile,
        setFeaturedFashion,
        setFeaturedElct,
        setMobileData,
        setFashionData,
        setElectronics,
    } = value;

    useEffect(() => {
        async function getPro() {
            try {
                const tempdata1 = await PaytmServices.getProduct();
                const data = tempdata1.data;
                const tempData = data.map((item) => {
                    let ProductCategory = item.ProductCategory.CategoryName;
                    let {
                        _id,
                        ProductName,
                        ProductPrice,
                        ProductType,
                        featured,
                        Rating,
                        moreInfo,
                        Qty,
                        image,
                        Spec,
                    } = item;
                    let productData = {
                        ProductName,
                        ProductPrice,
                        ProductType,
                        featured,
                        Rating,
                        moreInfo,
                        Qty,
                        image,
                        Spec,
                        _id,
                        ProductCategory,
                    };
                    return productData;
                });

                setProductData(tempData);

                //Filtering data
                const featuredMobile = tempData.filter((item) => {
                    return (
                        item.featured === true &&
                        item.ProductCategory === "mobiles"
                    );
                });
                setFeaturedMobile(featuredMobile);

                const featuredFashion = tempData.filter((item) => {
                    return (
                        item.featured === true &&
                        item.ProductCategory === "fashion"
                    );
                });
                setFeaturedFashion(featuredFashion);

                const featuredElct = tempData.filter((item) => {
                    return (
                        item.featured === true &&
                        item.ProductCategory === "electronics"
                    );
                });
                setFeaturedElct(featuredElct);

                //Set Category Wise data

                const mobileData = tempData.filter(
                    (item) => item.ProductCategory === "mobiles"
                );
                setMobileData(mobileData);

                const fashionData = tempData.filter(
                    (item) => item.ProductCategory === "fashion"
                );
                setFashionData(fashionData);

                const electronicsData = tempData.filter(
                    (item) => item.ProductCategory === "electronics"
                );
                setElectronics(electronicsData);
            } catch (error) {
                console.log(error);
            }
        }

        getPro();
    }, []);

    return (
        <div className="main-container">
            <Links />

            {/* <!-- Slider --> */}
            <Slider />

            {/****************   Mobiles    ****************/}
            <Mobiles item={featuredMobile} />
            {/****************   Fashion Wears    ****************/}
            <Fashion item={featuredFashion} />
            {/****************   Electronics    ****************/}
            <Electronics item={featuredElct} />
        </div>
    );
}
