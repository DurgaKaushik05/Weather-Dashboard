import { useState } from "react";
import { getWeather, getForecast } from "../utils/api";

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const res1 = await getWeather(city);
      const res2 = await getForecast(city);

      setData(res1.data);
      setForecast(res2.data.list);
    } catch (err) {
      console.log(err.response?.data);
      setError(err.response?.data?.message || "Something went wrong");
      setData(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

   return {
    data,
    forecast,
    loading,
    error,
    fetchWeather,
  };
};