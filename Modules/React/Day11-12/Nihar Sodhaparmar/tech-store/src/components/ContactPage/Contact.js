import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/f/mjvjyrkd"
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="nihar sodhaparmar"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email@email.com"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="important!!!"
              />
            </div>
            {/* message */}
            <div className="form-group">
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="hello there buddy"
              ></textarea>
              {/* submit */}
              <div className="form-group">
                <input
                  type="submit"
                  className="form-control bg-primary text-white mt-3"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
