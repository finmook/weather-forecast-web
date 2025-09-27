import Stack from "@mui/material/Stack";
import Today from "./Today";
import NextDay from "./NextDay";
function ForeCast(props){
    console.log(props.timeZone);
   return(<Stack spacing={2} sx={{ height: '100%' ,position:'relative',padding:'5% 5% 5% 5%','@media (max-width:600px)': { padding: '0 5% 0 5%' }}}>
        <Today todayForeCast={props.foreCast} timeZone={props.timeZone}/>
        <NextDay nextDayForeCast={props.foreCast} timeZone={props.timeZone}/>
    </Stack>) 
}
export default ForeCast;