import React, { Component } from "react";

export default class UncontrolledForm extends Component {
    constructor(props) {
        super(props);
        this.FirstName = React.createRef();
        this.LastName = React.createRef();
        this.my = React.createRef();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.FirstName.value, this.LastName.value);
        this.my.style.color = "red";
    };
    render() {
        return (
            <section>
                <article className="border border-primary p-3 m-3 bg-dark text-white">
                    <h1 className="text-monospace display-4  text-center">
                        Uncontrolled Form Demo
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="">FirstName</label>
                            <input
                                type="text"
                                class="form-control"
                                ref={(input) => (this.FirstName = input)}
                                placeholder="FirstName"
                                required
                            />
                            <label for="">LastName</label>
                            <input
                                type="text"
                                class="form-control"
                                name="LastName"
                                ref={(input) => (this.LastName = input)}
                                placeholder="LastName"
                                required
                            />
                            <button className="btn btn-outline-primary mt-2 btn-block">
                                Submit
                            </button>
                        </div>
                        <p
                            ref={(input) => (this.my = input)}
                            className="text-success text-center"
                        >
                            Hello World
                        </p>
                    </form>
                </article>
            </section>
        );
    }
}
