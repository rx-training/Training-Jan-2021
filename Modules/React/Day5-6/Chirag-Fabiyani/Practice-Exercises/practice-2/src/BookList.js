import React, { Component } from 'react'
import Book from './Book'
import BookData from './BookData'

export default class BookList extends Component {
    constructor(props){
        super(props);
        this.state={
            books: BookData,
            count: 0
        }
    }

    render() {
        return (
            <div className="container row mx-auto">
                <h3>This is our Booklist</h3>
                {this.state.books.map(item=>(
                    <Book key={item.id} info={item}/>
                ))}
                
            </div>
        )
    }
}
