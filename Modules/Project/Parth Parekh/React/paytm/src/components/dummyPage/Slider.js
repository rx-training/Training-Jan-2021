import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from "reactstrap";

const items = [
    {
        src: "https://assetscdn1.paytm.com/images/catalog/view_item/723817/1620730189617.jpg?imwidth=758&impolicy=hq_80",
    },
    {
        src: "https://assetscdn1.paytm.com/images/catalog/view_item/731438/1617101551687.png?imwidth=758&impolicy=hq_80",
    },
    {
        src: "https://assetscdn1.paytm.com/images/catalog/view_item/741754/1613724842057.jpg?imwidth=758&impolicy=hq_80",
    },
    {
        src: "https://assetscdn1.paytm.com/images/catalog/view_item/822802/1622451986651.jpg?imwidth=758&impolicy=hq_80",
    },
];

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="img-fluid" />
            </CarouselItem>
        );
    });

    return (
        <div className="row m-5">
            <div className="col-md-8">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators
                        items={items}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </Carousel>
            </div>
            <div className="col-md-4">
                <img
                    className="img-fluid"
                    alt="Brand Voucher"
                    role="presentation"
                    src="https://assetscdn1.paytm.com/images/catalog/view_item/713640/1610957016967.jpg"
                />
                <img
                    alt="Brand Voucher"
                    role="presentation"
                    className="img-fluid"
                    src="https://assetscdn1.paytm.com/images/catalog/view_item/713641/1610956907248.jpg"
                />
            </div>
        </div>
    );
};

export default Slider;
