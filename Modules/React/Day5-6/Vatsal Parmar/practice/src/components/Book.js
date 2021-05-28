import React, { Component } from "react";
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showInfo: true,
    };
  }

  addToCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  removeFromCart = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  deleteFromCart = () => {
    this.setState({
      count: 0,
    });
  };

  toggleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  checkInfo = (info) => {
    if (info) {
      return <p>Hello World</p>;
    } else {
      return null;
    }
  };

  render() {
    const { id, img, title, author } = this.props.info;
    return (
      <div className="book row text-center m-2 p-2 border border-dark">
        <div className="col-lg-2 ">
          <img src={img} width="150px" alt="BookImg" />
        </div>
        <div className="col-lg-10 border border-muted">
          <h4>Title : {title}</h4>
          <h5 className="text-secondary">Author : {author}</h5>
          <h5 className="text-primary">In Cart : {this.state.count}</h5>
          <button
            type="button"
            className="btn btn-success m-2"
            onClick={this.addToCart}
          >
            Add To Cart
          </button>
          <button
            type="button"
            onClick={this.removeFromCart}
            className="btn btn-info m-2"
          >
            Remove From Cart
          </button>
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={this.deleteFromCart}
          >
            Remove All From Cart
          </button>
          <br />
          <button
            className="btn btn-danger m-2"
            type="button"
            onClick={() => this.props.deleteItem(id)}
          >
            Delete Me
          </button>
          <button
            className="btn btn-warning m-2"
            type="button"
            onClick={this.toggleInfo}
          >
            {this.state.showInfo ? "show less" : "show more"}
          </button>
          {/* Using function */}
          {this.checkInfo(this.state.showInfo)}

          {/* Using trernary operator */}
          {/* {this.state.showInfo ? <p>Hello World</p> : null} */}

          {/* Using and */}
          {/* {this.state.showInfo && <p>Hello World</p>} */}
        </div>
      </div>
    );
  }
}
