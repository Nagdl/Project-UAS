import React from "react";
import "./Background.css";

function Background(props) {
    return (
        <>
            <div className="OverlayList"></div>
            <img src={props.image} alt="imgBc"/>
            <div className="isi">
                <h1>{props.name}</h1>
                <button  type="button" className="btn" id="buttonList">
                    Explore more
                </button>
            </div>
        </>
    );
}

export default Background;