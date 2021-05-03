import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


const Books = () =>{
  return(
      <section>
        <Book />
       
      </section>

  )
}

const Book = () =>{
  return ( 
    <article>
        < CoverImage />
        <Title/>
        <Author/>
    </article>
    
  )
}

const Title = () =>  <h1>Rich Dad Poor Dad</h1>

const Author = () =>  <p>Robert T. Kiyosaki</p>

const CoverImage = () =>{
  return <img src="https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg" alt="Rich Dad Poor Dad:"/>
}

ReactDOM.render(<Books />,
  document.getElementById('root')
);


reportWebVitals();
