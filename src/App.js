import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar";
import IsiSatu from "./components/Home/Satu/isiSatu";
import IsiDua from "./components/Home/Dua/IsiDua";
import IsiTiga from "./components/Home/Tiga/IsiTiga";
import "../src/App.css";

function App() {
  return (
    <div className="container-large m-0 p-0">
      <div className="">
        <Navbar/>  
      </div>
      <div>
        <IsiSatu/>
        
      </div>
      <div>
        <IsiDua/>
      </div>
      <div>
        <IsiTiga/>
      </div>
    </div>
  );
}

export default App;
