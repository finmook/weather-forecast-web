import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider"; 
import EachTime from "./EachTime";
import './Today.css';
function Today(props) {
    // const data=[{time:13,temp:35},{time:16,temp:35},{time:19,temp:36},{time:22,temp:34},{time:22,temp:34},{time:22,temp:34},{time:22,temp:34},{time:22,temp:34}];
    const datas=props.todayForeCast;
    const todayDatas=datas.filter((data)=>{
        return (new Date().getDate())==(new Date(data.dt*1000).getDate());
    });
    return (<div id="today-container">
        <Stack
            
            direction="row"
            
            spacing={0}
            sx={{position:'relative',height:'100%',overflowX:'auto'}}
        >
            {todayDatas.map((todayData)=>{
                let t=new Date(todayData.dt*1000).toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:true});
                return (<EachTime time={t} temp={todayData.main.temp} icon={todayData.weather[0].icon} />)})
            }
        </Stack>
    </div>);
}
export default Today;