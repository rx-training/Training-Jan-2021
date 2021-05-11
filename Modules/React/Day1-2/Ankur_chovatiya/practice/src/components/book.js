import React from 'react';


const Books = () =>{
    return(
        <div className="Books">
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
           
        </div>
    ) 
}

const Book = () =>{
    return(
        <article className="book">
            <CoverImg></CoverImg>
            <Title></Title>
            <Author></Author>
        </article>
    )
}

const CoverImg = () =>{
    return(
        <img 
        width="150"
        src="https://images-eu.ssl-images-amazon.com/images/I/51H2M2jWmvL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"></img>
    )
}

const Title = ()=>{
    return <h1 style={{color:'blue'}}>Ruskin Bond</h1>
}
const AuthorStyle = {
    fontSize:'1.5rem',
    color:'green'
}
const Author = ()=> {
    return <p style={AuthorStyle}>by Craig Smith</p>
}

export default Books;