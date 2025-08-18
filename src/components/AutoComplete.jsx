import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function AutoComplete(props) {
  const location = props.location;
  return (
    <Autocomplete

      id="free-solo-demo"
      freeSolo
      
      renderInput={(params) => <TextField {...params} label={props.label} sx={{
       
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused": {
            
            color: "white", // text color when focused
          },
          "&.Mui-focused fieldset": {
            
            borderColor: "white", // text color when focused
          }
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            borderColor:"white",
            color: "white", // label color when focused
          }
        }
      }}/>}
      sx={{ width: { xs: '100%', sm: 280 } }}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.2)", // โปร่งใส 20%
            backdropFilter: "blur(10px)", // ทำให้เป็นฟิล์มเบลอ
            color: "#fff",                 // ตัวหนังสือเป็นสีขาว
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)", // เงาเล็กน้อย
          }
        }
      }}
    />


  );
}

export default AutoComplete;