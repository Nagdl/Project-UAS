import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar";
import IsiSatu from "./components/Home/Satu/isiSatu";
import IsiDua from "./components/Home/Dua/IsiDua";
import IsiTiga from "./components/Home/Tiga/IsiTiga";
import "../src/App.css";

function App() {
  return (
    <div className="container-large">
      <div className="">
        <Navbar/>  
      </div>
      <div>
        <IsiSatu/>

        <div>
          <IsiDua/>
          <hr/>
        </div>

        <div>
          <IsiTiga/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
