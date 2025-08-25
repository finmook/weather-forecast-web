import React from "react";
import Stack from "@mui/material/Stack";
import './EachTime.css';
function EachTime(props){
    return (<div className="each-time">
        <p>{props.time}</p>
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} height="60px" />
        <p>{props.temp} ° C</p>
    </div>);
}
export default EachTime;