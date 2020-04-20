import React, { Component } from "react";
import "../styles/Pages.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { render } from "@testing-library/react";
import axios from "axios";
class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "dddd",
      email: "",
      message: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });
  }
  render() {
    return (
      <div className="Contact">
        <p>Thank you for reaching out!</p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input type="text" name="name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="email" name="email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              name="message"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        {/* <div>
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
      </div> */}
      </div>
    );
  }
}

export default Contact;
