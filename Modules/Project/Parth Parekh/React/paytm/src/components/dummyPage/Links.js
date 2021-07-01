import React from "react";

export default function Links() {
    return (
        <div>
            <div style={{ background: "#012b72" }}>
                <div className="p-2">
                    <div className="row text-white">
                        <div
                            className="col-4 col-md-2  text-center p-1 hovereffect1"
                            onClick={() => {
                                window.location.href = "/products";
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src="data:image/png;base64,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"
                                alt="produts"
                                width="70"
                            />
                            <h6>Online Shopping</h6>
                        </div>
                        <div className="col-4 col-md-2 text-center  p-1">
                            <img
                                className="ml-3"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA4CAYAAABez76GAAAAAXNSR0IArs4c6QAAAzlJREFUaAXtm0trFEEQx2cSjTE+Ynwhvg65KREk+MCDkIOiFxXBm4ge9CQoCN6ieBHxpn4DwU/gTSPkJL6QgKIielEjehAUo4muuu2vZCb0LpupHe3ZHaEK/unqru6qmv/WTm+gO44KEOfcIG7PgM1gFXB1oNvUmKwTyVr/Dvt9cCGO45cyudQCOYdBBbRaJgi4OzQ5cUiHJLgWf0/A/JB+c/gaZ+46KulLjjWZUzsyrfmNR1mSkjOG3k+y8iFInE4wC8xO0EU7B3SDuQl6aOcB8bEALEzQS7sI9IHFCZbQLgVbwWsgshrs/6OV8Q8VdN37Xh1pVY7EPO/FvRgyrnyiIWWl5+yxp2eqPNwBJmysm/SB/mUKMH1R15lrus+8nmwKwSQ0QX+b2GkWbqlb/Jn+VfCxbrxRtxkSG61Tx8pC0DYylXeRLxWq56c/0A69FARBRJWHn2wHAVrM0LuYFu+/sxtBykdmBBlBCgOK2SrICFIYUMxWQUaQwoBitgoyghQGFLNVkBGkMKCYrYKMIIUBxWwVZAQpDChmqyAjSGFAMVsFGUEKA4rZKsgIUhhQzFZBRpDCgGK2CjKCFAYUs1WQEaQwoJitgowghQHFbBVkBCkMKOYiD1D1cfZwWUZ87QhyHrucgC1EiiRopJCMW+zU3kEK4UVW0Cdi/1Dia6dTm7XLQXQ5bB5ciiRoB4czHwbPuIFD3nUHGb7WwPTPQ0USlD+5kakhLvZsYOGDaGfP3fwOwq8ozzvo5uSlqFodjaruCrgT3ZgaDv+4+T2Wg6Bb3/oj507Wpu/ORaOusO27NtbMvXIQ5Jx/xyPJ1nE7qLJi5tRbYykHQdXuMR73fe0jc3twqOtF7Vjre6EJGvceYb2nZ6u74q9RHO1hErte/D2K49tRR+de2l/ZC6etfiy5ohlMQu9ij8hsX5LdCbZf2eYl4fT3jLQpZFqqS/sUbPfGsDq5dJfOQZ3WZQz+YkK4AdRD0k9Ecggm2v87uQKR7BoWyN0tuTXYDnlLULmSOREqeNCvGIm9IbHjoBIqwRx+5LbQsZDkSOygFZQ+DJU0iH4KbALLgcRJY6V6qP4rfN8DZyHnOW1Q+Q2TZjaJCCu8RQAAAABJRU5ErkJggg=="
                                alt="Prepaid/Postpaid"
                            ></img>
                            <h6 className="ml-3">Prepaid/Postpaid</h6>
                        </div>
                        <div className="col-4 col-md-2  text-center p-1">
                            <img
                                className="ml-3"
                                src="data:image/png;base64,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"
                                alt="Electricity"
                            />
                            <h6 className="ml-2">Electricity</h6>
                        </div>

                        <div className="col-4 col-md-2  text-center p-1">
                            <img
                                src="data:image/png;base64,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"
                                alt="Metro"
                            />
                            <h6>Metro</h6>
                        </div>
                        <div className="col-4 col-md-2  text-center p-1">
                            <img
                                src="https://assetscdn1.paytm.com/images/catalog/view_item/657676/1602234384051.png"
                                alt="DTH"
                            />
                            <h6>DTH</h6>
                        </div>
                        <div className="col-4 col-md-2  text-center p-1">
                            <img
                                src="https://assetscdn1.paytm.com/images/catalog/view_item/431163/1602141884720.png"
                                alt="Education"
                                width="75"
                            />
                            <h6>Education</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
