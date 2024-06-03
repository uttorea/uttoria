import FrameComponent5 from "../components/frame-component5";
// import Product2 from "../components/product2";
import FrameComponent4 from "../components/frame-component4";
import Product1 from "../components/product1";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Product3 from "../components/product3";
import Product4 from "../components/product4";
import './product.css'
import Navbar from "./Navbar";

const Product = () => {
  return (
    <div className="product">
      <main className="frame-container">
      <Navbar/>
        <FrameComponent5 />
        
        <section className="product-1-parent">
          <Product3/>
          <FrameComponent4 />
        </section>
        <section className="product-2-parent"> 
           <Product4/>
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
