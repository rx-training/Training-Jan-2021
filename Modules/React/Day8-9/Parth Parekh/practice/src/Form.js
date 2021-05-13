import React, { Component } from "react";

export default class Form extends Component {
    state = {
        FirstName: "",
        LastName: "",
        people: [],
    };
    handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value.toUpperCase() });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const FirstName = this.state.FirstName;
        const LastName = this.state.LastName;

        if (FirstName.length > 0 && LastName.length > 0) {
            const person = ` ${FirstName} ${LastName} `;
            this.setState({
                people: [...this.state.people, person],
                FirstName: "",
                LastName: "",
            });
        }
    };
    render() {
        return (
            <section>
                <article className="border border-primary p-5 m-3 bg-dark text-white">
                    <h1 className="display-4 text-center ">Form Demo</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="">FirstName</label>
                            <input
                                type="text"
                                class="form-control"
                                name="FirstName"
                                value={this.state.FirstName}
                                onChange={this.handelChange}
                                placeholder="FirstName"
                                required
                            />
                            <label for="">LastName</label>
                            <input
                                type="text"
                                class="form-control"
                                name="LastName"
                                value={this.state.LastName}
                                onChange={this.handelChange}
                                placeholder="LastName"
                                required
                            />
                            <button className="btn btn-outline-success mt-2 btn-block">
                                Submit
                            </button>
                        </div>
                    </form>
                </article>
                <article>
                    <h1 className="text-monospace text-white ml-3">People</h1>
                    <div className={this.state.people && "text-success h5"}>
                        {this.state.people}
                    </div>
                </article>
            </section>
        );
    }
}
