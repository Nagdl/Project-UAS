import "./Card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    return(
        <div className="containerCard">
            <img src={props.image} alt="cardImageEmpat"/>
            <div className="isiCard">
                <Link to="/Wisata">{props.name}</Link>
            </div>
            <div className="clickbaitAjah">
                <FontAwesomeIcon icon={faImage} />
            </div>
        </div>
    );
}

export default Card;