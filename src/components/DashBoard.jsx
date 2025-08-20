import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from './Card';
function DashBoard(props) {
    return (
        <Grid container spacing={2}>
            <Grid size={4}>
                <Stack spacing={2} sx={{ height: 1 }}>
                    <Box sx={{ flex: 1,position:'relative'}}><Card result={props.weather} /></Box>
                    <Box sx={{ flex: 1,position:'relative'}}><Card result={props.temp} /></Box>
                </Stack>

            </Grid>
            <Grid size={8}>
                <h1>{props.weatherDescription}</h1>
            </Grid>

        </Grid>
    )



}

export default DashBoard;