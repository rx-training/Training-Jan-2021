import React from "react";
import Title from "../Title";

function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" center />
          <form className="mt-5">
            {/* first */}
            <div className="form-group my-2">
              <input
                className="form-control"
                name="name"
                placeholder="jhon doe"
                type="text"
              />
            </div>
            {/* email */}
            <div className="form-group my-2">
              <input
                className="form-control"
                name="email"
                placeholder="jhon@email.com"
                type="email"
              />
            </div>
            {/* subject */}
            <div className="form-group my-2">
              <input
                className="form-control"
                name="subject"
                placeholder="important!!!"
                type="text"
              />
            </div>
            {/* message */}
            <div className="form-group my-2">
              <textarea
                className="form-control"
                name="message"
                rows="10"
                placeholder="hello there"
                type="text"
              />
            </div>
            {/* submit */}
            <div className="form-group mt-3">
              <button type="button" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
