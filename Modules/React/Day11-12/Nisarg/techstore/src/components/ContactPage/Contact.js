import React from "react";
import Title from "../Title";

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"></Title>
                    <form className="mt-5">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="john smith"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="email@.com"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="important !!!"
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                className="form-control"
                                placeholder="hello there"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}