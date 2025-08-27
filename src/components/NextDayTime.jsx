import React from "react";
import './NextDayTime.css';
function NextDayTime(props){
    return (<div className="next-day-time">
        <p>{props.time}</p>
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} height="40px" />
        <p>{props.temp} ° C</p>
    </div>);
}
export default NextDayTime;