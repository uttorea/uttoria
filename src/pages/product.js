import FrameComponent5 from "../components/frame-component5";
import Product2 from "../components/product2";
import FrameComponent4 from "../components/frame-component4";
import Product1 from "../components/product1";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import './product.css'
import Navbar from "./Navbar";

const Product = () => {
  return (
    <div className="product">
      <main className="frame-container">
      <Navbar/>
        <img className="frame-icon" alt="" src="/frame-427318925@2x.png" />
        <FrameComponent5 />
        <div className="image-116-group">
          <img className="image-116-icon1" alt="" src="/image-116-1@2x.png" />
          <div className="frame-parent1">
            <div className="home-wrapper">
              <div className="home1">Home</div>
            </div>
            <div className="parachute-recovery-system-wrapper">
              <div className="parachute-recovery-system1">
                Parachute recovery system
              </div>
            </div>
            <div className="inflatable-airbags-system-parent">
              <div className="inflatable-airbags-system1">
                Inflatable airbags system
              </div>
              <div className="frame-child1" />
            </div>
            <div className="about-us-wrapper">
              <div className="about-us2">About us</div>
            </div>
            <div className="contact-us-wrapper">
              <div className="contact-us2">Contact Us</div>
            </div>
          </div>
        </div>
        <section className="product-1-parent">
          <Product2 />
          <FrameComponent4 />
        </section>
        <section className="product-2-parent">
          <Product1 />
          <FrameComponent3 />
        </section>
        <section className="frame-wrapper">
          <div className="urban-air-mobility-parent">
            <h1 className="urban-air-mobility">Urban Air Mobility</h1>
            <div className="backgroundborder1">
              <div className="with-the-age">
                With the age of urban air mobility on us, the need for
                sustainable, safe and smart air vehicles is growing to relieve
                the increasingly congested ground infrastructure. As urban
                transport takes wings, Uttoria is excited to offer Ballistic
                Recovery Systems for smart air vehicles 
              </div>
              <img
                className="backgroundborder-child"
                loading="lazy"
                alt=""
                src="/frame-117@2x.png"
              />
            </div>
          </div>
        </section>
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </main>
    </div>
  );
};

export default Product;
