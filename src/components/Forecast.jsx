import React from "react";
import Stack from "@mui/material/Stack";
import Today from "./Today";
import NextDay from "./NextDay";
function ForeCast(props){
   return(<Stack spacing={2} sx={{ height: '100%' ,position:'relative',padding:'5% 5% 5% 5%','@media (max-width:600px)': { padding: '0 5% 0 5%' }}}>
        <Today />
        <NextDay />
    </Stack>) 
}
export default ForeCast;