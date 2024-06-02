import React, { useState, useRef, useEffect } from 'react';
import './product3.css';

const Product3 = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const contentRef = useRef(null);
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      import('intersection-observer').then(() => {
        initIntersectionObserver();
      });
    } else {
      initIntersectionObserver();
    }

    function initIntersectionObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (contentRef.current) {
        observer.observe(contentRef.current);
      }

      return () => {
        if (contentRef.current) {
          observer.unobserve(contentRef.current);
        }
      };
    }
  }, []);

  const handleMouseMove = (event) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const y = event.clientY - rect.top;
      const newZoomLevel = 1 - y / rect.height;
      if (newZoomLevel >= 0 && newZoomLevel <= 1) {
        setZoomLevel(newZoomLevel);
      }
    }
  };

  const handleTouchMove = (event) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const touch = event.touches[0];
      const y = touch.clientY - rect.top;
      const newZoomLevel = 1 - y / rect.height;
      if (newZoomLevel >= 0 && newZoomLevel <= 1) {
        setZoomLevel(newZoomLevel);
      }
    }
  };

  const translateYValue = (0 + zoomLevel) * 100;

  return (
    <div className="container" ref={contentRef}>
      <h1 className="ballistic-emergency-recovery-container13">
        Ballistic Emergency Recovery Systems For Multi-Rotor UAVS
      </h1>
      <div
        className="ellipse"
        style={{
          backgroundColor: '#242425',
        }}
      >
        <div
          className="frame-wrapper53"
          style={{
            transform: `scale(${1 - zoomLevel})`,
            display: zoomLevel < 1 ? 'block' : 'none',
            transition: 'transform 0.5s ease-out',
          }}
        >
          <div className="frame-parent363">
            {/* (Same content as before) */}
          </div>
        </div>
      </div>
      <div className="frame-wrapper63">
        <div className="arsentm-series-offers-built-in-parent3">
          <div className="arsentm-series-offers-container3">
            <b>ARSENTM</b>
            <span>
              {" "}
              Series offers built in intelligence and split-second decision
              making capable recovery system
            </span>
          </div>
          <div
            className="frame-wrapper7"
            style={{
              transform: `translateY(${translateYValue}px)`,
              display: translateYValue > 70 ? 'none' : 'flex',
              transition: 'transform 0.2s',
              position: 'absolute',
              marginTop: '70px',
            }}
          >
            <div className="explore-arsentm-series-parent3">
              <div className="explore-arsentm-series-container3">
                <span className="explore-arsentm-series-container13">
                  <span>{`Explore `}</span>
                  <span className="arsentm3">ArsenTM</span>
                  <span> Series</span>
                </span>
              </div>
              <div className="vector-wrapper3">
                <img className="vector-icon1" alt="" src='/vector1.svg' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ellipse"
        style={{
          transform: `scale(${zoomLevel})`,
          backgroundColor: '#13131A',
          display: zoomLevel >= 0 ? 'block' : 'none',
        }}
      ></div>
      <img
        src='/image-54@2x.png'
        alt="Overlay"
        className="overlay-image"
        style={{
          transform: `scale(${0.7 + 0.3 * zoomLevel})`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div
        ref={sliderRef}
        className="zoom-controls"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ right: '50px', top: '40%', height: '150px', width: '50px' }}
      >
        <div
          className="zoom-handle"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: `${zoomLevel * 100}%`,
            width: '45.41px',
            height: '192.74px',
            background: 'white',
            cursor: 'pointer',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Product3;
