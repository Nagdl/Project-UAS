import React from "react";
import "./Card.css";

// function Card(props) {
//   return (
//     <div className="cardContainer">
//       <div className="grid-item">
//         <div className="fotoCard">
//            <img src={props.image} />
//         </div>
//         <div className="namaWisata">
//             <p>{props.name}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
function Card(props) {
  return (
    <div className="cardContainer">
      <img src={props.image} alt="imgCard"/>
      <div className="isiCard">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Card;
