import React, { useEffect, useState } from "react";
import "./frame-component5.css";

const FrameComponent5 = () => {
  const [scrollBallPosition, setScrollBallPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollBallPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="frame-section">
      <header className="b4fa8b1f819ec20581eca-homepage-parent">
        <div className="main-container">
          <div className="image-72-parent">
            <div>
              <h1 className="recoveryContainer">Recovery Systems</h1>
            </div>
            <p className="plug-text">Plug and Play solution</p>
            <div className="question">
              <p>What We Do &#63;</p>
            </div>
            <div className="answer-box">
              <div className="answer">
                We design and deliver plug-and-play recovery systems and
                parachute based emergency recovery systems for fixed wing,
                multirotor and rotary wing UAS between 5 to 150Kg systems. 
                <p>
                  We offer airframe specific customised products from 50 kgs to
                  250 kgs All Up Weight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent5;
