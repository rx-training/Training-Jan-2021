import React from "react";
import ReactDOM from "react-dom"; 
import './index.css';
/*
function Greeting()
{
  return (
      <React.Fragment>
        <div>
          <h1>Hello World</h1>
          <ul>
            <li><a href="#">Hello world</a></li>
          </ul>
        </div>
        <section>
          <Person/>
          <Message/>
        </section>
      </React.Fragment>
  );
}

const Person=()=><h2>John doe</h2>;
const Message=()=><p>This is my message</p>;

function Books()
{
  return  (
    <section className="Books">
      <Book/>
    </section>

  );
}
const Book=()=>
{
  <article className="Book">
      <CoverImage/>
      <Author/>
    </article>
};

const CoverImage=()=><img width="200" src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg" alt="Alchemist"/>
const Author=()=><p>by Craig Smith</p>
*/

const Person=({img,name,job,children})=>
{
  const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return
  (
    <article className="person">
        <img src={url} alt="person"/>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
    </article>
  );
};
const PersonList=()=>
{
  return(
    <section className="person-list">
      <Person img="34" name='john' job="developer" />
      <Person img="21" name='bob' job="designer">
        <p>Lorem ipsum dolor sit amet consectetur,adipisicing elit.Asperiores ,tempora! </p>
      </Person>
      <Person img="56" name='david' job="the boss" />
    </section>
  )
}
ReactDOM.render(<PersonList/>,document.getElementById('root'));
