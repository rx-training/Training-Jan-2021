import BookData from "./BookData";
import Book from "./Book";
import React, { Component } from "react";

// 1. Do the hands on the for book Mini Project video from tutorial site
class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: BookData,
        };
    }
    render() {
        return (
            <>
                {this.state.books.map((item, key) => (
                    <Book key={key} info={item} />
                ))}
            </>
        );
    }
}
export default BookList;
