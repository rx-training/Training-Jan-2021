import React, { Component } from "react";
import Book from "./Book";
import booksData from "../../data/bookData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
    };
  }

  handleDelete = (id) => {
    const sortedBooks = this.state.books.filter((item) => item.id !== id);
    this.setState({
      books: sortedBooks,
    });
  };

  render() {
    return (
      <section>
        {this.state.books.map((item) => (
          <Book
            key={item.id}
            info={item}
            handleDelete={this.handleDelete}
          ></Book>
        ))}
      </section>
    );
  }
}
