import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider"; 
import EachTime from "./EachTime";
import './Today.css';
function Today(props) {
    // const data=[{time:13,temp:35},{time:16,temp:35},{time:19,temp:36},{time:22,temp:34},{time:22,temp:34},{time:22,temp:34},{time:22,temp:34},{time:22,temp:34}];
    const datas=props.todayForeCast;
    return (<div id="today-container">
        <Stack
            
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={0}
            sx={{position:'relative',height:'100%',overflowX:'auto'}}
        >
            {datas.map((data)=>{
                let time=new Date(data.dt*1000).toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:true});
                return (<EachTime time={time} temp={data.main.temp} icon={data.weather[0].icon} />)})
            }
        </Stack>
    </div>);
}
export default Today;