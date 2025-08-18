import { useState,useEffect } from 'react'//don't forget to import useEffect
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './App.css';
import axios from "axios";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [weatherDescription,setWeatherDescription]=useState("");
  useEffect(() => {
    changeBackground();
  }, [weather]);

  async function handleClick(event) {
    const newValue = event.target.value;

    try {
      const response = await axios.get("/api/weather", {
        params: { city: inputCity },
      });
      setWeather(response.data.weather[0].main);
      setTemp(response.data.main.temp);
      setWeatherDescription(response.data.weather[0].description);
      
    } catch (err) {
      console.log(err);
    }
  }
  function changeBackground() {
    let image="/sunny.jpg";
    if (weather == "Drizzle") image = "/drizzle.jpg";
    else if (weather == "Rain") image = "/raining.jpg";
    else if (weather == "Clouds") image = "/cloudy.jpg";
    else if (weather == "Thunderstorm") image = "/thunderstorm.jpeg"
    else if (weather == "Snow") image = "/snow.jpg";
    else if (weather == "Atmosphere") image = "/atmosphere.jpg";
    else if (weather == "Clear") image = "/sunny.jpg";

    document.body.style.background = `url(${image})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";

  }
  
  return (
    <div>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField id="outlined-basic" label="City" variant="outlined" sx={{
          '& .MuiInputLabel-root': {
            color: 'white',            // label color (normal)
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',            // label color (focused)
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },   // border color
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' }
          }
        }} value={inputCity} onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleClick();
            }
          }} />
        <Button variant="outlined" sx={{ color: "white", borderColor: "white" }} onClick={handleClick} value={inputCity}>OK</Button>
      </Stack>
      <div>
        <h1>{weather}</h1>
        <h1>{temp}</h1>
        <h1>{weatherDescription}</h1>
      </div>


    </div>
  )
}

export default App
