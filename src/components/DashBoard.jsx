import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Frosted from './Frosted';
import Card from './Card';
import ForeCast from './Forecast';
import './DashBoard.css';
function DashBoard(props) {
    return (
        
          <Grid container spacing={0} sx={{ overflowY:'auto'}}>
            <Grid size={{xs:12,sm:6}}>
                <Stack spacing={2} sx={{ height: '100%'}}>
                    <Box sx={{ height:'100%', position: 'relative'}}><Frosted result={props.country} additional={props.date} /></Box>
                    <Box sx={{ height:'100%', position: 'relative' }}><Frosted result={props.weather} additional={props.weatherDescription} /></Box>
                    {/* <Box sx={{ flex: 1,position:'relative'}}><Card result={props.temp} /></Box> */}
                    <Grid container spacing={2} sx={{height:'100%' ,padding:'0 0 5% 0'}}>
                        <Grid size={6}><Box sx={{ height:'100%',minHeight:'75px',width:'100%',position:'relative'}}><Card val={"feel likes"} result={props.feelLike}/></Box></Grid>
                        <Grid size={6}><Box sx={{ height:'100%',minHeight:'75px',width:'100%',position:'relative'}}><Card val={"humidity"}result={props.humidity} /></Box></Grid>
                        <Grid size={6}><Box sx={{ height:'100%',minHeight:'75px',width:'100%',position:'relative'}}><Card val={"pressure"}result={props.pressure} /></Box></Grid>
                        <Grid size={6}><Box sx={{ height:'100%',minHeight:'75px',width:'100%',position:'relative'}}><Card val={"aqi"} result={props.humidity} /></Box></Grid>
                    </Grid>

                </Stack>

            </Grid>
             <Grid size={{xs:12,sm:6}} >

                <ForeCast foreCast={props.foreCast} />

            </Grid>

        </Grid>  
       
        
    )



}

export default DashBoard;