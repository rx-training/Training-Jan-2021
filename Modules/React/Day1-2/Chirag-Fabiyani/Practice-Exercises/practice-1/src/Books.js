import React from 'react'

function Books() {
    return (
        <section className="books">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article className="book">
            <CoverImage />
            <Title />
            <Author />
        </article>
    )
}

const CoverImage = () => (
    <img width="200" src="https://picsum.photos/536/354" alt="" />
)

const Title = () => <h1 style={{fontSize:'2rem',color:'red'}}>The Wonkey Donkey</h1>

const authorStyle = {
    letterSpacing :"10px",
    color:"green"
}

const Author = () => <p style={authorStyle}>by Craig Smith</p>

export default Books;