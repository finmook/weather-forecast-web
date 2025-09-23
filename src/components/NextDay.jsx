import React from "react";
import EachDay from "./EachDay";
import './NextDay.css';
const todayDay=new Date();
function daysInMonth (month, year) { 
  return new Date(year, month, 0).getDate();
}
function createEachDay(day, nextDayDatas) {
    const eachDayDatas = nextDayDatas.filter(nextDayData => {
        return (new Date(nextDayData.dt * 1000).getDate()) == (((todayDay.getDate() + day-1)%daysInMonth(todayDay.getMonth()+1,todayDay.getFullYear()))+1);
    })
    console.log(eachDayDatas);
    return (
        
        <EachDay eachDayDatas={eachDayDatas} />
    );
}
function NextDay(props) {
    
    const datas = props.nextDayForeCast;
    const days = [1, 2, 3, 4];
    const nextDayDatas = datas.filter((data) => {
        return (new Date(data.dt * 1000).getDate()) != (todayDay.getDate())
    })
    return (<div id="nextday-container">
        <h1>Daily Forecast</h1>
        {days.map((day) => (createEachDay(day, nextDayDatas)))}
    </div>)
}
export default NextDay;