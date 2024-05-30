import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import Home from "../src/components/Pages/Home";
import About from "../src/components/Pages/About";
import Contact from "../src/components/Pages/ContactUs";
import WisataDesc from "./components/Pages/WisataDesc";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.body.removeAttribute("data-aos-easing");
document.body.removeAttribute("data-aos-duration");
document.body.removeAttribute("data-aos-delay");
document.body.style.overflow = "auto";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container-large">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wisata" element={<WisataDesc />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
