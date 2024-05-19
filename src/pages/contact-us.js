import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/frame-component";
import "./contact-us.css";
import Navbar from "./Navbar";

const ContactUs = () => {

  return (
    <div className="contact-us">
      <main className="frame-parent">
      <Navbar/>
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
            <textarea
              className="frame-textarea"
              placeholder="Write your message.."
              rows={11}
              cols={52}
            />
            <div className="message">Message</div>
            <div className="message-content">
              <div className="message-content-child" />
              <input
                className="your-full-name"
                placeholder="Your full name"
                type="text"
              />
            </div>
            <div className="name">Name</div>
            <div className="message-content1">
              <div className="message-content-item" />
              <input
                className="phno-name"
                placeholder="Phno. name"
                type="text"
              />
            </div>
            <div className="contact">{`Contact `}</div>
            <div className="message-content2">
              <div className="message-content-inner" />
              <input
                className="your-email-address"
                placeholder="Your email address"
                type="text"
              />
            </div>
            <div className="email">Email</div>
            <div className="message-content3">
              <div className="rectangle-div" />
              <input
                className="reason-for-the"
                placeholder="Reason for the message"
                type="text"
              />
            </div>
            <div className="subject">{`Subject `}</div>
            <button className="send-message-wrapper">
              <div className="send-message">Send message</div>
            </button>
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
