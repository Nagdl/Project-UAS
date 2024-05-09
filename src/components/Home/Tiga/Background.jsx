import React from "react";
import "./Background.css";

function Background(props) {
    return (
        <div className="backContainer">
            <img src={props.image} alt="imgBc"/>
            <div className="isi">
                <h1>{props.name}</h1>
                <p>{props.desk}</p>
            </div>
        </div>
    );
}

export default Background;