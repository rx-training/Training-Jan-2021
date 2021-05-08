import React from "react";
import BookList from "./BookList";
import "./BookApp.scss";

function BookApp() {
  return (
    <section className="container my-5">
      <h1 className="display-4 text-center mb-5">Book App</h1>
      <BookList></BookList>
    </section>
  );
}

export default BookApp;
