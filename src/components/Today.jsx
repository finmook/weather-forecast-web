import Stack from "@mui/material/Stack";
import EachTime from "./EachTime";
import './Today.css';
function Today(props) {
    const datas=props.todayForeCast;
    const timeZone=props.timeZone;
    const todayDatas=datas.filter((data)=>{
        return (new Date(Date.now()+timeZone*1000).getUTCDate())==(new Date(data.dt*1000+timeZone*1000).getUTCDate());
    });
    return (<div id="today-container">
        <Stack
            direction="row"
            spacing={0}
            sx={{position:'relative',height:'100%',overflowX:'auto'}}
        >
            {todayDatas.map((todayData)=>{
                let t=new Date(todayData.dt*1000+timeZone*1000).toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:true,timeZone: 'UTC'});
                return (<EachTime time={t} temp={todayData.main.temp} icon={todayData.weather[0].icon} />)})
            }
        </Stack>
    </div>);
}
export default Today;