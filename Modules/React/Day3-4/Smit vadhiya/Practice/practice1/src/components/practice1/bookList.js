import React, { Component } from 'react'
import Book from "./Books";
import bookData from './Bookdata'
export default class BookList extends Component {
    constructor(props){
        super(props)
        this.state = {books : bookData}
    }
    render() {
        return (
            <div>
                <h1>Book list</h1>
                {this.state.books.map((book) => 
                    <Book key={book.id} info={book} />)}
            </div>
        )
    }
}
