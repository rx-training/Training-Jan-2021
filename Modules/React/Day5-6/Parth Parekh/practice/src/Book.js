import React, { Component } from "react";

export default class Book extends Component {
    state = {
        count: 0,
        showInfo: false,
    };
    // handleClick = () => {
    //     console.log("Button Clicked  " + this.state.count);
    // };
    addCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    lowerCount = () => {
        this.setState({ count: this.state.count - 1 });
    };
    resetCount = () => {
        this.setState({ count: 0 });
    };

    // Conditional in jsx
    toggleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
        });
    };
    render() {
        const { id, img, author, title } = this.props.info;
        const { handleDelete } = this.props;

        // const checkInfo = (info) => {
        //     if (info === true) {
        //         return <p>hello</p>;
        //     } else {
        //         return null;
        //     }
        // };

        return (
            <div className="col-md-4">
                <div className="text-center  m-2">
                    <img
                        src={img}
                        alt="book"
                        className="mx-auto"
                        width="150px"
                    ></img>
                    <h4 className="p-2 m-2">{title}</h4>
                    <h6> {author}</h6>

                    <button
                        type="button"
                        className="btn btn-primary p-2 m-1 d-inline"
                        onClick={() => {
                            handleDelete(id);
                        }}
                    >
                        Delete Book
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary p-2 m-1 d-inline"
                        onClick={this.toggleInfo}
                    >
                        Toggle Info
                    </button>

                    {/* ternary operator */}
                    {this.state.showInfo ? <p>Great book for read</p> : null}

                    {/* method for Conditional Rendering  && method
                    {this.state.showInfo && (<p>Hello</p>)} */}

                    {/* using setState */}
                    <h4>Count : {this.state.count}</h4>
                    <button
                        type="button"
                        className="btn btn-primary p-2 m-1 d-inline"
                        onClick={this.addCount}
                    >
                        add count
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger p-2  m-1 d-inline"
                        onClick={this.resetCount}
                    >
                        reset count
                    </button>
                    <button
                        type="button"
                        className="btn btn-success p-2 m-1 d-inline"
                        onClick={this.lowerCount}
                    >
                        lower count
                    </button>

                    {/* {checkInfo(this.state.showInfo)} */}
                </div>
            </div>
        );
    }
}
