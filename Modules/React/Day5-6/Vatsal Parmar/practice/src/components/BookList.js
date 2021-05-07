import React, { Component } from "react";
import Book from "./Book";
import bookData from "./bookData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: bookData };
  }
  deleteItem = (id) => {
    const updatedList = this.state.books.filter((item) => item.id !== id);
    this.setState({ books: updatedList });
  };
  render() {
    return (
      <div>
        <h4 className="text-primary">This is our Booklist</h4>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} deleteItem={this.deleteItem} />
        ))}
      </div>
    );
  }
}
