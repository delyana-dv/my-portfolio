import React from "react";
import "../styles/Pages.css";

const Contact = () => {
  return (
    <div className="Contact">
      <p>Thank you for reaching out!</p>
      <div>
        <form action="https://formspree.io/delyana_86@yahoo.com" method="POST">
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            required
          />

          <input
            type="phone"
            name="phone"
            autoComplete="off"
            placeholder="Phone Number"
          />
          <br />

          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            cols="100"
            className="textAreaForm"
            required
          />
          <br />

          <button target="_blank" className="send-button" type="submit">
            <a href="delyana_86@yahoo.com" alt="send">
              Send
            </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
