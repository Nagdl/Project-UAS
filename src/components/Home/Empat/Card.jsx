import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
    return(
        <div className="containerCard">
            <img src={props.image} />
            <div className="isiCard">
                <Link to="/Wisata">{props.name}</Link>
            </div>
        </div>
    );
}

export default Card;