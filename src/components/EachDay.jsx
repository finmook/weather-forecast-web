import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import './EachDay.css';
import NextDayTime from "./NextDayTime";

function EachDay(props) {
    const eachDayDatas = props.eachDayDatas;
    if(!eachDayDatas.length) return null;

    // {new Date(eachDayDatas[0].dt*1000).toLocaleDateString([], { weekday: "short" })}
    const weekDay=new Date(eachDayDatas[0].dt * 1000).toLocaleDateString([], { weekday: "short" });
   
    return (<div id="eachday-container">
        <h6 className="day-text">{weekDay}</h6>

        {/* {console.log(typeof eachDayDatas)}
        {console.log(eachDayDatas)} */}
        <Stack

            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
            sx={{ position: 'relative', height: '100%', overflowX: 'auto' }}
        >
            {eachDayDatas.map((eachDayData) => {
                let t = new Date(eachDayData.dt * 1000).toLocaleString([], { hour: "2-digit", minute: "2-digit", hour12: true });
                return (<NextDayTime time={t} temp={eachDayData.main.temp} icon={eachDayData.weather[0].icon} />)
            })
            }
        </Stack>
    </div>);
}
export default EachDay;