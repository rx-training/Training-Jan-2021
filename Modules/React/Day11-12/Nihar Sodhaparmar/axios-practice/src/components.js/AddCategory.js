import React, { Component } from "react";
import CategoryService from "../services/CategoryService";

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      categoryName: "",
    };
  }

  changecategoryNameHandler = (event) => {
    this.setState({
      categoryName: event.target.value,
    });
  };

  addCategory = (event) => {
    event.preventDefault();
    CategoryService.createCategory(this.state.categoryName, this.state.id).then(
      (res) => {
        this.props.history.push("/category");
      }
    );
  };

  cancel = () => {
    this.props.history.push("/category");
  };
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              Add Category
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Category Name: </label>
                    <input
                      placeholder="Category Name"
                      name="categoryName"
                      className="form-control"
                      value={this.state.categoryName}
                      onChange={this.changecategoryNameHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.addCategory}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
