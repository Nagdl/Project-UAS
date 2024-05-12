import React from "react";
import "./Background.css";

function Background(props) {
    return (
        <>
            <img src={props.image} alt="imgBc"/>
            <div className="isi">
                <h1>{props.name}</h1>
                <p>{props.desk}</p>
            </div>
        </>
    );
}

export default Background;