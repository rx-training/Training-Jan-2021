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

  render() {
    return (
      <section>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item}></Book>
        ))}
      </section>
    );
  }
}
