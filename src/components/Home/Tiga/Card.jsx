import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} />
      <div className="box">
        <h1>{props.name}</h1>
      </div>
      <div className="deskrip">
        <p>{props.desk}</p>
      </div>
    </div>
  );
}

export default Card;
