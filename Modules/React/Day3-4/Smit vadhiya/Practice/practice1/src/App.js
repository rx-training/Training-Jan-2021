import React, { Component } from 'react'
import BookList from './components/practice1/bookList';
import {NumberList,Blog} from './components/practice2/listKey';
import Timer from './components/practice2/timer';


const posts = [
{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
{id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

export default class App extends Component {
  render() {
    console.log("render start");
    return (
      <div>
        <h1 className="text-white text-center p-3 bg-dark"> Practice 1 (Book Mini)</h1>
        <BookList />
        <h1 className="text-white text-center p-3 bg-dark"> Practice 2 </h1>
            <Timer  date = {new Date()} />
            <NumberList numbers = {[1,2,3,4,5]}/>
            <Blog posts ={posts} />
      </div>
    )
    
  }
}

