import React from "react";
import "./isiSatu.css";
import lampung from "../../assets/VideoLampung.mp4"

function IsiSatu() {
    return(
        <div className="containerIsiSatu">
            <video className="iniVideo" autoPlay muted loop playsInline>
              <source src={lampung} type="video/mp4" />
            </video>
            <div className="text">
              <img src="https://lampungprov.go.id/portal/images/saibumi_small.webp" />
            </div>
            
        </div>
    );
}

export default IsiSatu;