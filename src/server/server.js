import * as dotenv from 'dotenv'
dotenv.config()//to use .env file but server.js is not in root

import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const limit=1;

app.get("/api/weather", async (req, res) => {
    try {
        const city = req.query.city || "Bangkok";
        const apiCity=city.trim().toLowerCase();
       
        const response1= await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${apiCity}&limit=${limit}&appid=${process.env.API_KEY}`)
        if (!response1.data || response1.data.length === 0) {
            return res.status(404).send({ error: "City not found" });
        }
        const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response1.data[0].lat}&lon=${response1.data[0].lon}&units=metric&appid=${process.env.API_KEY}`);
        const response3= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${response1.data[0].lat}&lon=${response1.data[0].lon}&units=metric&appid=${process.env.API_KEY}`);
        res.send({nowData:response2.data,foreCast:response3.data});

    } catch (err) {
        console.log(err);
        res.send(err);
    }
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})