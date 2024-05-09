import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IsiSatu from "./components/Home/Satu/isiSatu";
import IsiDua from "./components/Home/Dua/IsiDua";
import "../src/App.css"
import IsiTiga from "./components/Home/Tiga/IsiTiga";

function App() {
  return (
    <div className="container">

      <div className="header">
        <Navbar/>  
      </div>

      <div>
        <IsiSatu/>
        <div className="isiTiga">
          <h1 className="judulIsiTiga">Destination Highlight</h1>
          <IsiTiga/>
          <hr/>
        </div>
        <IsiDua/>
      </div>
      
    </div>
  );
}

export default App;
