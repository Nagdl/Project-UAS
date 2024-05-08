import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IsiSatu from "./components/Home/Satu/isiSatu";
import IsiDua from "./components/Home/Dua/IsiDua";
import "../src/App.css"
import IsiTiga from "./components/Home/Tiga/IsiTiga";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar/>  
      </div>

      <div className="container">
        <IsiSatu/>
        <IsiDua/>
        <IsiTiga/>
      </div>
      
    </div>
  );
}

export default App;
