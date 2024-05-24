import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import FrameComponent from "../components/frame-component";
import Navbar from "./Navbar";
import "./contact-us.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    reason: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log formData
    emailjs.send('service_utx929k', 'template_5w3q5pt', formData, 'N2fOyjGttFJAEtRu_')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <div className="contact-us">
      <main className="frame-parent">
        <Navbar />
        <section className="parent">
          <img className="icon" alt="" src="/5301854-1@2x.png" />
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="frame-item" />
            <div className="frame-inner" />
            <div className="image-25-parent">
              <img className="image-25-icon" alt="" src="/image-25@2x.png" />
              <div className="overlay-parent">
                <div className="overlay" />
                <div className="divelementor-widget-wrap">
                  <div className="djac-siic-building">
                    DJAC, SIIC building, IIT Kanpur 208016
                  </div>
                </div>
                <div className="wrapper-vector-parent">
                  <div className="wrapper-vector">
                    <img
                      className="vector-icon"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="gradient" />
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                className="frame-textarea"
                placeholder="Write your message.."
                name="message"
                rows={11}
                cols={52}
                value={formData.message}
                onChange={handleChange}
              />
              <div className="message">Message</div>
              <div className="message-content">
                <div className="message-content-child" />
                <input
                  className="your-full-name"
                  placeholder="Your full name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="name">Name</div>
              <div className="message-content1">
                <div className="message-content-item" />
                <input
                  className="phno-name"
                  placeholder="Phno. name"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="contact">{`Contact `}</div>
              <div className="message-content2">
                <div className="message-content-inner" />
                <input
                  className="your-email-address"
                  placeholder="Your email address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="email">Email</div>
              <div className="message-content3">
                <div className="rectangle-div" />
                <input
                  className="reason-for-the"
                  placeholder="Reason for the message"
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                />
              </div>
              <div className="subject">{`Subject `}</div>
              <button type="submit" className="send-message-wrapper">
                <div className="send-message">Send message</div>
              </button>
            </form>
            <div className="for-general-other-inquiries-parent">
              <div className="for-general-other-inquiries">
                <div className="spanelementor-icon">
                  <h3 className="symbol"></h3>
                </div>
                <div className="heading-6">Address</div>
                <div className="djac-siic-building1">
                  DJAC, SIIC building, IIT Kanpur 208016
                </div>
              </div>
              <div className="for-general-other-inquiries1">
                <div className="spanelementor-icon1">
                  <h3 className="symbol1"></h3>
                </div>
                <div className="heading-61">For Inquiries</div>
                <div className="salesuttoreacom">sales@uttorea.com</div>
              </div>
              <div className="for-general-other-inquiries2">
                <img
                  className="spanelementor-icon2"
                  loading="lazy"
                  alt=""
                  src="/spanelementoricon.svg"
                />
                <div className="heading-62">For Sales Inquiry</div>
                <div className="div">+91 721 928 6003</div>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent />
      </main>
    </div>
  );
};

export default ContactUs;
