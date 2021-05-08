import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      showInfo: false,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   console.log("you clicked me");
  //   console.log(this.state.count);
  // }

  handleInfo = () => {
    this.setState(() => {
      return { showInfo: !this.state.showInfo };
    });
  };

  addCount = () => {
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
  };

  lowerCount = () => {
    this.setState((state, props) => {
      return {
        count: state.count - 1,
      };
    });
  };

  resetCount = () => {
    this.setState((state, props) => {
      return {
        count: 1,
      };
    });
  };

  checkInfo = (info) => {
    if (info === true) {
      return (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente
          architecto eius quis soluta ad tempore, quo praesentium! Provident,
          debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla pariatur hic consequuntur ex. Hic, temporibus quidem! Dolor
          tempore maxime nihil?
        </p>
      );
    } else {
      return null;
    }
  };

  render() {
    const { id, img, title, author } = this.props.info;
    const { handleDelete } = this.props;

    return (
      <article className="book row">
        <img
          className="col-md-4 col-lg-2 p-3"
          width="150"
          src={img}
          alt="book"
        />
        <div className="col-md-8 col-lg-10 p-3 sm-text-center">
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <h6 className="mt-1">Count : {this.state.count}</h6>

          <button
            className="btn btn-sm btn-dark mt-3 mr-4"
            type="button"
            onClick={this.handleInfo}
          >
            Toggle Info
          </button>

          <button
            className="btn btn-sm btn-primary mt-3 mr-4"
            type="button"
            onClick={this.addCount}
          >
            Add Count
          </button>
          <button
            className="btn btn-sm btn-secondary mt-3 mr-4"
            type="button"
            onClick={this.lowerCount}
          >
            Lower Count
          </button>
          <button
            className="btn btn-sm btn-success mt-3 mr-4"
            type="button"
            onClick={this.resetCount}
          >
            Reset Count
          </button>

          <button
            onClick={() => handleDelete(id)}
            className="btn btn-sm btn-danger mt-3"
            type="button"
          >
            Delete Book
          </button>

          {/* Ternary Operator */}
          {this.state.showInfo ? (
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              vitae temporibus amet sunt, laborum quas quaerat accusantium. A,
              fugit labore. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quam delectus et repudiandae quibusdam necessitatibus
              recusandae quo, veritatis voluptates suscipit earum.
            </p>
          ) : null}

          {/* simple javascript function */}
          {this.checkInfo(this.state.showInfo)}

          {/* and */}
          {this.state.showInfo && (
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              consectetur molestiae culpa veritatis ducimus adipisci ex aliquam
              eos dolor esse. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Magni alias quisquam, exercitationem quod aperiam eos! Neque
              corporis placeat voluptatum dolor.
            </p>
          )}

          {/* <Button handleDelete={handleDelete}></Button> */}
        </div>
      </article>
    );
  }
}
