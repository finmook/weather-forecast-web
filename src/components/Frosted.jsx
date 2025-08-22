import React from "react";
import './Frosted.css';
function Frosted(props){
    return (<div className="frosted">
        <h1>{props.result}</h1>
        <h1>{props.additional}</h1>
    </div>)
}
export default Frosted;