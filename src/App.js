import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IsiSatu from "./components/Home/isiSatu";
import "../src/App.css"

function App() {
  return (
    <div>
      <div className="header">
        <Navbar/>  
      </div>
      <IsiSatu/>
    </div>
  );
}

export default App;
