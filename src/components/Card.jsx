import React from "react";
import './Card.css';
function Card(props){
    return (<div className="card">
        <h5>{props.val}</h5>
        <h6>{props.result}</h6>
    </div>)
}
export default Card;