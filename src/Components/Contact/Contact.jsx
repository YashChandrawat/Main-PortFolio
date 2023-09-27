import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaHeadphones } from "react-icons/fa";
import img from "./contact.webp";
import "../Contact/Contact.css"; // Make sure to import your CSS file with the original class names

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4768isq", // Replace with your Email.js service ID
        "template_t3apccj", // Replace with your Email.js template ID
        e.target,
        "VakK1Wne5N_w94J6X" // Replace with your Email.js user ID
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Email sending failed. Please try again later.");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h2 className="heading-sec">
        <FaHeadphones /> Get in touch
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="whole-section">
          <div className="left-sec">
            <img src={img} alt="Contact" className="contact-img" />
          </div>
          <div className="right-sec">
            <input
              className="input-sec"
              type="text"
              required
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="input-sec"
              type="email"
              required
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="input-sec"
              type="number"
              required
              placeholder="Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols={28}
              rows={10}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <button className="btn btn-hover btn-contact" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
