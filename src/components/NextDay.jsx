import EachDay from "./EachDay";
import './NextDay.css';

function createEachDay(day, nextDayDatas,todayDay,timeZone) {
    const target = new Date(Date.UTC(
    todayDay.getUTCFullYear(),
    todayDay.getUTCMonth(),
    todayDay.getUTCDate() + day,
    0, 0, 0
  ));
    const eachDayDatas = nextDayDatas.filter(nextDayData => {
    const local = new Date(nextDayData.dt * 1000 + timeZone * 1000);
    return (
      local.getUTCFullYear() === target.getUTCFullYear() &&
      local.getUTCMonth() === target.getUTCMonth() &&
      local.getUTCDate() === target.getUTCDate()
    );
    })
    return (
        
        <EachDay eachDayDatas={eachDayDatas} timeZone={timeZone} />
    );
}
function NextDay(props) {
    const timeZone=props.timeZone;
    const todayDay=new Date(Date.now()+timeZone*1000);


    const datas = props.nextDayForeCast;
    const days = [1, 2, 3, 4];
    const nextDayDatas = datas.filter((data) => {
        return (new Date(data.dt * 1000+timeZone*1000).getUTCDate()) != (todayDay.getUTCDate())
    })
    return (<div id="nextday-container">
        <h1>Daily Forecast</h1>
        {days.map((day) => (createEachDay(day, nextDayDatas,todayDay,timeZone)))}
    </div>)
}
export default NextDay;