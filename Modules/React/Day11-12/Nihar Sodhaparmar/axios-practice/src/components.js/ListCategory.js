import React, { Component } from "react";
import CategoryService from "../services/CategoryService";

export default class ListCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    CategoryService.getCategories().then((res) => {
      this.setState({ categories: res.data });
    });
  }

  editCategory = (id) => {
    this.props.history.push(`/edit-category/${id}`);
  };

  deleteCategory = (id) => {
    CategoryService.deleteCategory(id).then((res) => {
      this.setState({
        categories: this.state.categories.filter(
          (category) => category._id !== id
        ),
      });
    });
  };

  addCategory = () => {
    this.props.history.push("/add-category");
  };

  render() {
    return (
      <div className="container my-5">
        <h2 className="text-center">Category List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addCategory}>
            Add Category
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Category Id</th>
                <th> Category Name</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.categories.map((category) => (
                <tr key={category._id}>
                  <td> {category._id} </td>
                  <td> {category.categoryName} </td>

                  <td>
                    <button
                      onClick={() => this.editCategory(category._id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteCategory(category._id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
