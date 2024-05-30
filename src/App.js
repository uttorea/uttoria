import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about-us";
import Product from "./pages/product";
import Home from "./pages/home";
import LoadingPage from "./components/LoadingPage";  // Import LoadingPage

function App() {
  const [loading, setLoading] = useState(true);  // Add loading state
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to our home page.";
        break;
      case "/about-us":
        title = "About Us";
        metaDescription = "Learn more about us.";
        break;
      case "/product":
        title = "Product";
        metaDescription = "Check out our products.";
        break;
      case "/contact-us":
        title = "Contact Us";
        metaDescription = "Get in touch with us.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  useEffect(() => {
    setLoading(true);  // Show loading screen on route change

    const timer = setTimeout(() => {
      setLoading(false);  // Hide loading screen after 1 second
    }, 1000);

    return () => clearTimeout(timer);  // Cleanup timer on unmount
  }, [pathname]);  // Depend on pathname to trigger on route change

  if (loading) {
    return <LoadingPage />;  // Show loading page when loading is true
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
