// named and default import/exports
// only one default export module
// module as a file

import React, { Component } from "react";
import Blog from "./components/Practices-of-Json-In-Depth/Blog";
import Banner from "./components/Header/Banner";
import NumberList from "./components/Practices-of-Json-In-Depth/NumberList";
import { name, age, person } from "./data";
import Clock from "./components/Practices-of-State-and-Lifecycle/Clock";
import ReactDom from "react-dom";

// const App = () => {
//   return (
//     <section>
//       <Banner />
//       <p>this is my content</p>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{person.name}</p>
//     </section>
//   );
// };

// import * as data from "./data";
// const App = () => {
//   return (
//     <section>
//       <p>this is my content</p>
//       <p>{data.name}</p>
//       <p>{data.age}</p>
//       <p>{data.person.name}</p>
//     </section>
//   );
// };

// class based component
class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm.",
      },
    ];

    function removeclock() {
      ReactDom.render(
        <div>
          <h1 className="text-center mt-5">
            View console to check component unmounted
          </h1>
        </div>,
        document.getElementById("root")
      );
    }

    return (
      <section>
        <h1 className="display-4 my-5 pt-5 text-center">Video Exercises</h1>
        <Banner />
        <hr />
        <p>this is my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
        <hr />
        <h1 className="display-4 my-5 text-center">List and Keys Exercises</h1>
        <h2 className="my-5">Numberlist Exercise</h2>
        <NumberList numbers={numbers} />
        <hr />
        <h2 className="my-5">Blog Exercise</h2>
        <Blog posts={posts} />
        <h1 className="display-4 my-5 text-center">
          State and Lifecycle Exercises
        </h1>
        <div id="clock">
          <Clock></Clock>
        </div>
        <button className="btn btn-primary" onClick={removeclock}>
          Click to Unmount Timer
        </button>
      </section>
    );
  }
}

export default App;
