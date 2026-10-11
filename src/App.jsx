import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { data, forecast, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app">
  <h1>🌦️ Weather Dashboard</h1> 
  <SearchBar onSearch={fetchWeather} />

  {error && <p className="error">{error}</p>}

  {loading && <p>Loading...</p>}

  {data && <WeatherCard data={data} />}

  {forecast.length > 0 && <Forecast forecast={forecast} />}
</div>
  );
}

export default App
