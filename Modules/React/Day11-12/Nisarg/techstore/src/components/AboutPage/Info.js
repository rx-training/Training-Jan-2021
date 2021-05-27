import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img
                            src={aboutBcg}
                            alt="about"
                            className="img-fuild img-thumbnail"
                            style={{ background: "var(--darkGrey)" }}
                        />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us"></Title>
                        <p className="text-lead text-muted my-3">
                            Lorem ipsum dolor sit, amet consec tetur adipisicing
                            elit. Deleniti dolor ipsum accusantium eius,
                            doloribus quis quidem laborum laudantium quos sequi.
                        </p>
                        <p className="text-lead text-muted my-3">
                            Lorem ipsum dolor sit, amet consec tetur adipisicing
                            elit. Deleniti dolor ipsum accusantium eius,
                            doloribus quis quidem laborum laudantium quos sequi.
                        </p>
                        <button
                            className="main-link"
                            style={{ marginTop: "2rem" }}
                            type="button"
                        >
                            more info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}