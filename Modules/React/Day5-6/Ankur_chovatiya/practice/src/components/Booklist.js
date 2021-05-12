import React, { Component } from 'react'
import Book from './Book';
import booksData from './BookData';
// import Card from 'react-bootstrap/Card'

export default class Booklist extends Component {

    constructor(props){
        super(props);
        this.state = {
            books : booksData
        };
    }

    handleDelete = (id) =>{
        // console.log(this.state.books);
        const sortedBooks = this.state.books.filter((book) => book.id !== id)
        // console.log(sortedBooks);
        this.setState({
            books : sortedBooks
        })
    }

    render() {
        return (
            <div className="row d-flex justify-content-center">
                <h1>This Our BookList</h1>
                <hr></hr>
                {this.state.books.map(book => (
                    <Book key={book.id} info={book} handleDelete={this.handleDelete}></Book>
                ))}
            </div>
        )
    }
}
