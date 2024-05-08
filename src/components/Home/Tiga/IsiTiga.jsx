import React from "react";
import "../Tiga/IsiTiga.css";
import Wisata from "../Tiga/Wisata";
import Card from "../Tiga/Card";

function IsiTiga() {
    return(
        <div className="containerIsiTiga">
        {Wisata.map(function (Wisata) {
          return (
            <Card
              key={Wisata.id}
              name={Wisata.name}
              image={Wisata.imgURL}
              desk={Wisata.deskripsi}
            />
          );
        })}
      </div>
    );
}

export default IsiTiga;