import React from "react";
import "./Background.css";
import { Link } from "react-router-dom";

function Background(props) {
    return (
        <>
            <div className="OverlayList"></div>
            <img src={props.image} alt="imgBc"/>
            <div className="isi">
                <h1>{props.name}</h1>
                <Link to="/Wisata" className="btn" id="buttonList">
                    Explore more
                </Link>
            </div>
        </>
    );
}

export default Background;
