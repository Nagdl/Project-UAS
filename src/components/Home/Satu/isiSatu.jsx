import React from "react";
import "../Satu/isiSatu.css";
import lampung from "../../../assets/VideoLampung.mp4"
import saibumi from "../../../assets/saibumi.webp"

function IsiSatu() {
    return(
        <div className="container-fluid containerIsiSatu">
            <div>
              <video className="iniVideo" autoPlay muted loop playsInline>
                <source src={lampung} type="video/mp4" />
              </video>
            </div>
            <div className="desc">
              <img src={saibumi} alt="xixi"/>
              <div className="iniButton">
                <button type="button">Discover More.</button>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    );
}

export default IsiSatu;