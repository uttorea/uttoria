import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundBorderOverlayBlur1 from "./background-border-overlay-blur1";
import "./frame-component51.css";

const FrameComponent51 = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  return (
    <section className="home-inner2">
      <div className="discover-our-recovery-systems-parent">
        <h1 className="discover-our-recovery">Discover Our Recovery Systems</h1>
        <div className="frame-wrapper15">
          <div className="frame-parent43">
            <div className="our-recovery-system-is-capable-wrapper">
              <div className="our-recovery-system">
                Our recovery system is capable to recover different classes of
                Drone systems. Multirotor, fixed wing, VTOL drones and RUAVs
              </div>
            </div>
            <div className="backgroundborderoverlayblur-parent5">
              <BackgroundBorderOverlayBlur1
                image54="/image-541@2x.png"
                arsenTM="Arsen"
                vector="/vector1.svg"
                onFrameContainer1Click={onFrameContainer1Click}
              />
              <BackgroundBorderOverlayBlur1
                image54="/unnamed 7.png"
                arsenTM="Diceris"
                vector="/vector-1.svg"
                propPadding="201px 0px 0px"
                propGap="62.5px"
                propPadding1="0px var(--padding-xl) 0px var(--padding-2xl)"
                width= "389px"
                margin-top="27px"
                onFrameContainer1Click={onFrameContainer12Click}
              />
            </div>
            <div className="explore-our-range-of-recovery-wrapper">
              <div className="explore-our-range">
                Explore our range of recovery systems, each designed to meet
                specific needs and requirements
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent51;
