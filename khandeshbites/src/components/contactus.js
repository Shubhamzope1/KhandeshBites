import React, { Component } from "react";


class ContactUs extends Component {
  render() {
    return (
      <div className="contact-container" style={{height: "63vh", minHeight:"fit-content"}}>
        <h2>Contact Us</h2>
        <p>If you have any questions, suggestions, or feedback, feel free to email us directly.</p>
        <a href="mailto:khandeshibites@example.com" className="email-link">
          📧 Email Us
        </a>
      </div>
    );
  }
}

export default ContactUs;
