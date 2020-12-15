import React from "react";
import "../styles/Contact.css";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}

  render() {
    return (
      <div className="App">
        <p className="contact-us">Contact Us</p>
        <p className="swing">
          Swing by for a cup of coffee, or leave us a message:
        </p>
        <div className="wrapper">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <section className="address">
            <p>
              If you have any questions or queries a member of staff will always
              be happy to help. Feel free to contact us by telephone or email
              and we will be sure to get back to you as soon as possible.
            </p>
            <p className="phone">Phone: (+44)7956007722</p>
            <p className="phone">
              Address: Wike Ridge Lane, Shadwell, Leeds, LS17 9JW
            </p>
            <p className="phone">General Enquiries: info@futureapp.com</p>
          </section>
        </div>
      </div>
    );
  }
}
export default ContactPage;
