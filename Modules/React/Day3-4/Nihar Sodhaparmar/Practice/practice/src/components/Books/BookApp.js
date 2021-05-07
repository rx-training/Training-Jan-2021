import React from "react";
import BookList from "./BookList";
import "./BookApp.css";

function BookApp() {
  return (
    <section>
      <h1 className="display-4 text-center mb-5">Book App</h1>
      <BookList></BookList>
    </section>
  );
}

export default BookApp;
