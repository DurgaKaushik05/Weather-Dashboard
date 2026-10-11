import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getWeather = (city) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

export const getForecast = (city) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );