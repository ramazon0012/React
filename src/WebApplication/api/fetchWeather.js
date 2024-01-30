import React from "react";
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "cae59e6c85f25a9d86159e6adbf7e488"

export const fetchWeather = async (query) => {
    const {data} = await  axios.get(URL, {
        params: {
            q : query,
            units : "materic",
            APPID : API_KEY,
        }
    })
    return data;
}
