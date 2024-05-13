import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../src/App.css";
import { Route, Routes } from "react-router-dom"
import Home from "../src/components/Pages/Home"
import About from "../src/components/Pages/About"
import Contact from "../src/components/Pages/ContactUs"
import WisataDesc from "./components/Pages/WisataDesc";


function App() {
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
