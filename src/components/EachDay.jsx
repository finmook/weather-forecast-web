import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import './EachDay.css';
import NextDayTime from "./NextDayTime";

function EachDay(props) {
    const timeZone = props.timeZone;
    const eachDayDatas = props.eachDayDatas;
    if (!eachDayDatas.length) return null;
    const weekDay = new Date(eachDayDatas[0].dt * 1000 + timeZone * 1000).toLocaleDateString([], { weekday: "short", timeZone: 'UTC' });
    return (<div id="eachday-container">
        <h6 className="day-text">{weekDay}</h6>
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
            sx={{ position: 'relative', height: '100%', overflowX: 'auto' }}
        >
            {eachDayDatas.map((eachDayData) => {
                let t = new Date(eachDayData.dt * 1000 + timeZone * 1000).toLocaleString([], { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: 'UTC' });
                return (<NextDayTime time={t} temp={eachDayData.main.temp} icon={eachDayData.weather[0].icon} />)
            })
            }
        </Stack>
    </div>);
}
export default EachDay;