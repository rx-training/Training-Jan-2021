import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Person = ({img,name,job,children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <article className="person">
      <img src={url} alt="Person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}


const PersonList = () => {
  return(
    <section className="person-list">
      <Person img="34" name="john" job="developer" />
      <Person img="22" name="bob" job="designer">
        <p>
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
        </p>
      </Person>
      <Person img="56" name="david" job="the boss" />
    </section>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <PersonList />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
