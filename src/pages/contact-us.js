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
    console.log('Form Data:', formData); 
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
    <div className='contectusmain'>
    <section className="frame-wrapper121">
      <Navbar/>
      <div className="frame-parent331">
        <div className='mapimage'>
        <img className="image-25-icon" alt="" src="/Section 2.png" />
        <div className="overlay-parent"/>
        <div className='contectusdivmain'>

        <div className="contectusleft">

          <div className='addressmain'>
            <div className='addressall'>
            <img
                  className="spanelementor-icon1"
                  loading="lazy"
                  alt=""
                  src="/Symbol.png"
                />
            </div>
            <div className='addresssection'>
            <h1>Address</h1>
            <p>DJAC, SIIC building, IIT Kanpur 208016</p>
            </div>
          </div>

          <div className='forinquarymain'>
            <div className='forinquaryimage'>
            <img
                  className="spanelementor-2"
                  loading="lazy"
                  alt=""
                  src="/Symbolm.png"
                />
            </div>
            <div className='forinquari-heading'>
              <h1>For Inquiries</h1>
              <p>sales@uttorea.com</p>
            </div>
          </div>


          <div className='for-sales-inquari-main'>
            <div className='forsalesimg'> <img
                  className="spanelementor-3"
                  loading="lazy"
                  alt=""
                  src="/Vector.png"
                />
                </div>
            <div className='forsalehead'>
              <h1>For Sales Inquiry</h1>
              <p>+91 721 928 6003</p>
            </div>
          </div>
        </div>


        <div className="frame-parent341">

          <div className="frame-parent351">
            <div className="name-group1">
              <div className="name21">Name</div>
              <div className="rectangle-parent61">
                <input
                  className="your-full-name21"
                  placeholder="Your full name"
                  type="text"
                />
              </div>
            </div>
            <div className="contact-group1">
              <div className="contact21">{`Contact `}</div>
              <div className="rectangle-parent71">
              
                <input
                  className="phno-name271"
                  placeholder="Phno. name"
                  type="text"
                />
              </div>
            </div>
          </div>
          
          <div className="frame-parent361">
            <div className="frame-parent371">
              <div className="email-group11">
                <div className="email21">Email</div>
                <div className="frame-parent381">
                  <input
                  className="emailinput"
                  placeholder="Your email address"
                  type="text"
                />
                 
                </div>
              </div>
              
              <div className="subject-group1">
                <div className="subject21">{`Subject `}</div>
                <div className="rectangle-parent91">
                  <input
                    className="reason-for-the21"
                    placeholder="Reason for the message"
                    type="text"
                  />
                </div>
              </div>
            </div>
            </div>
            
            <div className="message21">Message</div>
            <textarea
            // style={{overflow: 'hidden',width: '1033px', height: '224.53px', resize: 'none'}}
              className="frame-child27"
              placeholder="Write your message.."
              rows={10}
              cols={46}
              
            />
          
          <button className="send-message-frame1">
            <div className="send-message21">Send message</div>
          </button>
        </div>
        </div>
      </div>
    </div>
    </section>
      <FrameComponent/>
    </div>
  );

         

};

export default ContactUs;