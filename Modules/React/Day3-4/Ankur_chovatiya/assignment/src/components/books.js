import React from 'react';
import card from 'react-bootstrap/Card'


const Book = () =>{
    return(
        <article >
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


const Books = () =>{
    return(
        <div className="row">
            <Book className="col col-md-4 col-lg-3 col-xl-2"></Book>
            <Book className="col col-md-4 col-lg-3 col-xl-2"></Book>
            <Book className="col col-md-4 col-lg-3 col-xl-2"></Book>
            <Book className="col col-md-4 col-lg-3 col-xl-2"></Book>
            <Book className="col col-md-4 col-lg-3 col-xl-2"></Book>
            <Book className="col col-md-4 col-lg-3 col-xl-2"></Book>  
        </div>
    ) 
}

export default Books;