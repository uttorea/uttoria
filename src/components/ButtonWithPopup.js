// ButtonWithPopup.js

import React, { useState } from 'react';
import './ButtonWithPopup.css';

const ButtonWithPopup = ({togglePopup, isPopupVisible}) => {
  // const [isPopupVisible, setIsPopupVisible] = useState(false);

  // const togglePopup = () => {
  //   setIsPopupVisible(!isPopupVisible);
  // };

  return (
    <div>
      {/* <button className="open-popup-btn" onClick={togglePopup}>
        Open Popup
      </button> */}
      
      {isPopupVisible && (
        <div className="popup-overlay27" onClick={togglePopup}>
          <div className="popup-content27" onClick={(e) => e.stopPropagation()}>
            <h2 className='One-last-step'>One Last Step!</h2>
            <p className='provide-your-email'>Provide Your Email, And We'll Email Your Brochure</p>
            <p className='download-small'>Download Small & Medium UAV Recovery System Brochure</p>
            
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
