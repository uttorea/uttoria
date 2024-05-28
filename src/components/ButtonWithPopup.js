import React from 'react';
import './ButtonWithPopup.css';

const ButtonWithPopup = ({ togglePopup, isPopupVisible, selectedSystem }) => {
  return (
    <div>
      {isPopupVisible && (
        <div className="popup-overlay27" onClick={togglePopup}>
          <button className="close-btn27" onClick={togglePopup}>×</button>
          <div className="popup-content27" onClick={(e) => e.stopPropagation()}>
            <h2 className='One-last-step'>One Last Step!</h2>
            <p className='provide-your-email'>Provide Your Email, And We'll Email Your Brochure</p>
            <p className='download-small'>Download {selectedSystem} Brochure</p>
            
            <form className="popup-form27">
              <div className="form-group27">
                <label className=''>Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="form-group27">
                <label>Email</label>
                <input type="email" placeholder="Your email address" />
              </div>
            </form>
            <div>
              <p className="privacy-text27">We Respect Your Privacy. Your Email Will Not Be Shared Or Used For Spam</p>
              <div className='popup-btn-submit'>
                <button type="submit" className="submit-btn27">Get My Brochure</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithPopup;