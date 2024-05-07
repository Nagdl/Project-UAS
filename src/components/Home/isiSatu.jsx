import React from "react";
import "./isiSatu.css";
import lampung from "../../assets/VideoLampung.mp4"
import saibumi from "../../assets/saibumi.webp"

function IsiSatu() {
    return(
        <div className="containerIsiSatu">
            <div>
              <video className="iniVideo" autoPlay muted loop playsInline>
                <source src={lampung} type="video/mp4" />
              </video>
            </div>
            <div className="desc">
              <img src={saibumi} />
              <div className="iniButton">
                <button oncli type="button">Explore</button>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    );
}

export default IsiSatu;