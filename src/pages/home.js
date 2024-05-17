import { useCallback } from "react";
import FrameComponent6 from "../components/frame-component6";
// import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FrameComponent41 from "../components/frame-component41";
import FrameComponent51 from '../components/frame-component51';
import FrameComponent31 from '../components/frame-component31'
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
 

  return (
    <div className="home2">
      <Navbar/>

    
      <div className="overlay2" />
      <section className="home-inner">
        <div className="frame-parent2">
          <div className="uttorea-group">
            <h1 className="uttorea1">Uttorea</h1>
            <h2 className="rescue-safety1">{`Rescue & Safety systems`}</h2>
          </div>
          <div className="imbibing-the-qualities-of-our-wrapper">
            <div className="imbibing-the-qualities1">{`Imbibing the qualities of our name, Uttoria’s goal is about bringing safety & protection to Unmanned Aerial Systems (UAS), Remotely Piloted Aerial Systems (RPAS)  & Urban Air Mobility (UAM) operations.`}</div>
          </div>
        </div>
      </section>
      <section className="home-child">
        <div className="empowering-unmanned-aerial-op-parent">
          <h1 className="empowering-unmanned-aerial-container">
            <p className="empowering">{`“Empowering `}</p>
            <p className="unmanned-aerial-operations">{`unmanned aerial operations `}</p>
            <p className="to-fly-everywhere">to fly everywhere safely.”</p>
          </h1>
          <div className="backgroundborder2">
            <div className="safety-is-paramount">
              "Safety is paramount in the aerospace industry, and our mission is
              to safeguard the life and property of the UAS and UAM ecosystem.
              Whether it's operators, end-users, or government regulatory
              bodies, we prioritize safety to ensure seamless operations
              globally."
            </div>
          </div>
        </div>
      </section>
      
      <FrameComponent6 />
      <FrameComponent51/>
      <FrameComponent41/>
      <FrameComponent31/>
        <FrameComponent2 />
        <FrameComponent1 />

      <footer className="frame-footer">
      <FrameComponent />
      </footer>
     
    </div>
  );
};

export default Home;
