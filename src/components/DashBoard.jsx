import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Frosted from './Frosted';
import Card from './Card';
function DashBoard(props) {
    return (
        <Grid container spacing={2}>
            <Grid size={{xs:12,md:6}}>
                <Stack spacing={2} sx={{ height: 1 }}>
                    <Box sx={{ flex: 1, position: 'relative' }}><Frosted result={props.country} additional={props.date} /></Box>
                    <Box sx={{ flex: 1, position: 'relative' }}><Frosted result={props.weather} additional={props.weatherDescription} /></Box>
                    {/* <Box sx={{ flex: 1,position:'relative'}}><Card result={props.temp} /></Box> */}
                    <Grid container spacing={2} sx={{flex:1}}>
                        <Grid size={6}><Box sx={{ height:'100%',width:'100%',position:'relative'}}><Card val={"feel likes"} result={props.feelLike}/></Box></Grid>
                        <Grid size={6}><Box sx={{ height:'100%',width:'100%',position:'relative'}}><Card val={"humidity"}result={props.humidity} /></Box></Grid>
                        <Grid size={6}><Box sx={{ height:'100%',width:'100%',position:'relative'}}><Card val={"pressure"}result={props.pressure} /></Box></Grid>
                        <Grid size={6}><Box sx={{ height:'100%',width:'100%',position:'relative'}}><Card val={"aqi"} result={props.humidity} /></Box></Grid>
                    </Grid>

                </Stack>

            </Grid>
             <Grid size={{xs:12,md:6}}>

                <Box sx={{ flex: 1 }}></Box>

            </Grid>

        </Grid>
    )



}

export default DashBoard;