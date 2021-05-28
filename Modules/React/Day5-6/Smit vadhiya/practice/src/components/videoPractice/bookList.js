import React, { Component } from 'react'
import Book from "./Books";
import bookData from './Bookdata'
export default class BookList extends Component {
    constructor(props){
        super(props)
        this.state = {books : bookData}
    }

    handleDelete = (id) => {
        const newData = this.state.books.filter((book) => book.id !== id)
        this.setState({books : newData})
    }
    

    render() {
        return (
            <div>
                <h1>Book list</h1>
                {this.state.books.map((book) => 
                    <Book key={book.id} info={book} handleDelete = {this.handleDelete}/> )}
            </div>
        )
    }
}
