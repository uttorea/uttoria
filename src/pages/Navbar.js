import React from 'react'
import './Navbar.css'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

      const onImage116Click = useCallback(() => {
        navigate("/");
      }, [navigate]);
    
      const onHomeText1Click = useCallback(() => {
        navigate("/");
      }, [navigate]);

      const onParachuteClick = useCallback(() => {
        navigate("/product");
      }, [navigate]);

      const onInflatableClick = useCallback(() => {
        navigate("/");
      }, [navigate]);
    
      const onAboutUsText1Click = useCallback(() => {
        navigate("/about-us");
      }, [navigate]);
    
      const onContactUsText1Click = useCallback(() => {
        navigate("/contact-us");
      }, [navigate]);
    
  return (
    <div className="frame-parent24">
    <div className="image-116-frame">
      <img
        className="image-116-icon7"
        loading="lazy"
        alt=""
        src="/image-1161@2x.png"
        onClick={onImage116Click}
      />
    </div>
    <div className="frame-parent25">
      <div className="home-wrapper4">
        <div className="home8" onClick={onHomeText1Click}>
          Home
        </div>
      </div>
      <div className="parachute-recovery-system7">
      <div className="home8" onClick={onParachuteClick}>
        Parachute recovery system
      </div>
      </div>

      <div className="inflatable-airbags-system-frame">
        <div className="inflatable-airbags-system7" onClick={onInflatableClick}>
          Inflatable airbags system
        </div>
      </div>
      <div className="frame-child16" />
      <div className="about-us-wrapper4">
        <div className="about-us8" onClick={onAboutUsText1Click}>
          About us
        </div>
      </div>
      <div className="contact-us-wrapper4">
        <div className="contact-us8" onClick={onContactUsText1Click}>
          Contact Us
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar
