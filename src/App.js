import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IsiSatu from "./components/Home/isiSatu";
import IsiDua from "./components/Home/IsiDua";
import "../src/App.css"

function App() {
  return (
    <div>
      <div className="header">
        <Navbar/>  
      </div>
      <div className="container">
      <IsiSatu/>
      <IsiDua/>
      </div>
    </div>
  );
}

export default App;
