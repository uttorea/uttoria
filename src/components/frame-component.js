import React from 'react';
import './frame-component.css';

const FrameComponent = () => {
  return (
    <footer className="footer">
      <hr/>
      <div className="footer-top">
        <div className="footer-section-1">
          <img
            className="logo-footer"
            loading="lazy"
            alt="Logo"
            src="/image-1161@2x.png"
          />
          <div className="foter-h2">
            <h2>UTTOREA</h2>
            <p>Rescue & Safety Systems</p>
          </div>
          
        </div>
      </div>

      <div className="footer-content">
      <div className="footer-phone">
            <p>+91 721 928 6003</p>
            <p className="email-footer">sales@uttorea.com</p>
          </div>
        <div className="footer-section products">
          <h3>Product</h3>
          <p>Multirotor Recovery system</p>
          <p>Fixed wing Recovery system</p>
        </div>
        <div className="footer-section services">
          <h3 className="footer-service">Services</h3>
          <p className="custom-footer">Custom Drone Recovery system</p>
        </div>
        <div className="footer-section office">
          <h3>Office</h3>
          <p style={{ textAlign: 'start', width:'90%'}}>
            DJAC, SIIC building, IIT Kanpur 208016
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <hr/>
        <div className="social-icons">
          {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a> */}
          <img
          className="facebook-icon2"
          loading="lazy"
          alt=""
          src="/facebook.svg"
        />
        <img
          className="linkedin-icon2"
          loading="lazy"
          alt=""
          src="/linkedin.svg"
        />
        <p>&copy; 2024 UTTOREA. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
