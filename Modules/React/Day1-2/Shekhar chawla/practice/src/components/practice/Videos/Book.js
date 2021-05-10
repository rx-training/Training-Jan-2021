/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../../../index.css'

const Books = () => {
    return (
        <div className="books">
            <Book />
            <Book />
            <Book />
        </div>
    )
}

const Book = () => {
    return (
        <section>
            <BookImage />
            <Title />
            <Author />
        </section>
    )
}

const BookImage = () => {
    return (
        <article>
            <img width="300" src="https://playandgo.com.au/wp-content/uploads/2015/06/wonky-donkey-630-630x420.jpg" alt="book image"></img>
        </article>
    )
}

const Title = () => <h1>Wonkey Donkey</h1>

const Author = () => <p>Craieg</p>

export default Books