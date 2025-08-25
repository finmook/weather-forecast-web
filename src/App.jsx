import { useState,useEffect } from 'react'//don't forget to import useEffect
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './App.css';
import axios from "axios";
import DashBoard from './components/dashboard';

function App() {
  const [inputCity, setInputCity] = useState("");
  const [weather, setWeather] = useState("-");
  const [weatherDescription,setWeatherDescription]=useState("-");
  const [temp, setTemp] = useState("-");
  const [feelLike,setFeelLike]=useState("-");
  const [humidity,setHumidity]=useState("-");
  const [date,setDate]=useState(new Date().toDateString());
  const [country,setCountry]=useState("-");
  const [pressure,setPressure]=useState("-");
  const [foreCast,setForeCast]=useState([]);
  useEffect(() => {
    changeBackground();
  }, [weather]);

  async function handleClick(event) {
    const newValue = event.target.value;

    try {
      const response = await axios.get("/api/weather", {
        params: { city: inputCity },
      });
      let country=inputCity[0].toUpperCase()+inputCity.slice(1).toLowerCase();
      let {nowData,foreCast}=response.data;
      //console.log(foreCast);
      setWeather(nowData.weather[0].main);
      setTemp(`${nowData.main.temp} ºC`);
      setFeelLike(`${nowData.main.feels_like} ºC`);
      setWeatherDescription(nowData.weather[0].description);
      setHumidity(`${nowData.main.feels_like} %`);
      setDate(new Date().toDateString());
      setCountry(country);
      setPressure(nowData.main.pressure)
      setForeCast(foreCast.list);
      setInputCity("");
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

    document.getElementsByClassName("bg")[0].style.background = `url(${image})`;//when change background other sub-properties change too
    document.getElementsByClassName("bg")[0].style.backgroundSize = "cover";
    document.getElementsByClassName("bg")[0].style.backgroundRepeat = "no-repeat";
    document.getElementsByClassName("bg")[0].style.height = "100vh";
    document.getElementById("box").style.background= `url(${image})`;
    document.getElementById("box").style.backgroundSize ="cover";
    document.getElementById("box").style.backgroundRepeat = "no-repeat";
    // document.getElementById("box").style.
  }
  
  return (
    <div >
      <Stack direction="row" spacing={2} alignItems="center"  justifyContent="center" sx={{'@media (max-height:500px)': { display: 'none' }}} >
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
          },
          
        }} value={inputCity} onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleClick();
            }
          }} />
        <Button variant="outlined" sx={{ color: "white", borderColor: "white" }} onClick={handleClick} value={inputCity}>OK</Button>
      </Stack>
      <div className="data">
        <DashBoard weather={weather} temp={temp} weatherDescription={weatherDescription} feelLike={feelLike} humidity={humidity} date={date} country={country} pressure={pressure} foreCast={foreCast}/>
        
      </div>


    </div>
  )
}

export default App
