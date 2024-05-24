import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import "./frame-component21.css";

const FrameComponent2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState("");
  const [email, setEmail] = useState("");

  const handleIconClick = (system) => {
    setSelectedSystem(system);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(selectedSystem, email);
      alert("Email sent successfully!");
      handleClosePopup();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const sendEmail = async (system, email) => {
    try {
      await emailjs.send(
        'service_utx929k', // Replace with your EmailJS service ID
        'template_5w3q5pt', // Replace with your EmailJS template ID
        { system, email },
        'N2fOyjGttFJAEtRu_' // Replace with your EmailJS user ID
      );
    } catch (error) {
      throw new Error('Failed to send email');
    }
  };

  return (
    <div className="rectangle-parent12">
      <div className="frame-child35" />
      <h1 className="download-brochure1">{`Download Brochure`}</h1>
      <div className="frame-parent48">
        <div 
          className="backgroundborderoverlayblur-parent11 clickable" 
          onClick={() => handleIconClick("Small & Medium UAV Recovery System")}
        >
          <img
            className="backgroundborderoverlayblur-icon11"
            loading="lazy"
            alt=""
            src="/backgroundborderoverlayblur-4.svg"
          />
          <div className="small-medium1">{`Small & Medium UAV recovery system`}</div>
        </div>
        <div 
          className="backgroundborderoverlayblur-parent12 clickable" 
          onClick={() => handleIconClick("VTOL / UAM Recovery System")}
        >
          <img
            className="backgroundborderoverlayblur-icon12"
            loading="lazy"
            alt=""
            src="/backgroundborderoverlayblur-5.svg"
          />
          <div className="vtol-uam1">VTOL / UAM recovery system</div>
        </div>
        <div 
          className="backgroundborderoverlayblur-parent13 clickable" 
          onClick={() => handleIconClick("Inflatables for UAV Recovery System")}
        >
          <img
            className="backgroundborderoverlayblur-icon13"
            loading="lazy"
            alt=""
            src="/backgroundborderoverlayblur-6.svg"
          />
          <div className="inflatables-for-uav1">
            Inflatables for UAV recovery system
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Request Details for {selectedSystem}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} required />
              </label>
              <button type="submit">Submit</button>
            </form>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrameComponent2;
