import React from "react";
import './Card.css';
function Card(props){
    return (<div className="card">
        <h1>{props.result}</h1>
    </div>)
}
export default Card;