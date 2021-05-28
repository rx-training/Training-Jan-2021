import BookData from "./BookData";
import Book from "./Book";
import React, { Component } from "react";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: BookData,
        };
    }
    handleDelete = (id) => {
        console.log(this.state.books);
        const sortedBooks = this.state.books.filter((item) => item.id !== id);
        console.log(sortedBooks);
        this.setState({ books: sortedBooks });
    };
    render() {
        return (
            <>
                {this.state.books.map((item) => (
                    <Book
                        key={item.id}
                        info={item}
                        handleDelete={this.handleDelete}
                    />
                ))}
            </>
        );
    }
}
export default BookList;
