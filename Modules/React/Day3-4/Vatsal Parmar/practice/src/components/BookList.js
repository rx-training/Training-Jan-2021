import React, { Component } from "react";
import Book from "./Book";
import bookData from "./bookData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: bookData };
  }
  render() {
    return (
      <div>
        <h4 className="text-primary">This is our Booklist</h4>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} />
        ))}
      </div>
    );
  }
}
