import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component8.css";

const FrameComponent8 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="home-inner8">
      <div className="our-solutions-parent">
        <h1 className="our-solution">Our Inflatable Recovery Solutions</h1>
       
            <div className="our-solutions-container">
              
                <div className="our-p-solutions">
                  Uttorea offers a range of safety and recovery systems designed
                  to meet the diverse needs of the aerospace industry. From
                  custom solutions for speciality or customized UAS to
                  off-the-shelf systems compatible with various drone platforms,
                  Uttorea provides reliable and cost-effective solutions for
                  drone safety.
                </div>
             
            
        </div>

        <div className="frame-parent44">
          <div className="frame-parent45">
            <div className="backgroundborderoverlayblur-parent6">
              <img
                className="backgroundborderoverlayblur-icon7"
                loading="lazy"
                alt=""
                src="/backgroundborderoverlayblur.svg"
              />
              <div className="multirotor-drone-for-container2">
                <p className="multirotor-drone-for2">{`Multirotor Drone for `}</p>
                <p className="sea-based-recovery2">Sea based recovery system</p>
              </div>
            </div>
            <div className="backgroundborderoverlayblur-parent7">
              <img
                className="backgroundborderoverlayblur-icon8"
                loading="lazy"
                alt=""
                src="/backgroundborderoverlayblur-1.svg"
              />
              <div className="multirotor-drone-for-container3">
                <p className="multirotor-drone-for3">{`Multirotor Drone for `}</p>
                <p className="land-based-recovery2">
                  land based recovery system
                </p>
              </div>
            </div>
            <div className="backgroundborderoverlayblur-parent8">
              <img
                className="backgroundborderoverlayblur-icon9"
                loading="lazy"
                alt=""
                src="/backgroundborderoverlayblur-2.svg"
              />
              <div className="fixed-wing-drone-container2">
                <p className="fixed-wing-drone5">{`Fixed wing Drone for `}</p>
                <p className="sea-based-recovery3">Sea based recovery system</p>
              </div>
            </div>
            <div className="backgroundborderoverlayblur-parent9">
              <img
                className="backgroundborderoverlayblur-icon10"
                loading="lazy"
                alt=""
                src="/backgroundborderoverlayblur-3.svg"
              />
              <div className="fixed-wing-drone-container3">
                <p className="fixed-wing-drone6">{`Fixed wing Drone for `}</p>
                <p className="land-based-recovery3">
                  land based recovery system
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
