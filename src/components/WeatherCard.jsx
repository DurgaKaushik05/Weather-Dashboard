function WeatherCard({ data }) {
  const currentDateTime = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }); 

  return (
    <div className="weather-card">
      {/* City Name */}
      <h2>{data.name}</h2>

      {/* Date and Time */}
      <p className="date-time">{currentDateTime}</p>

      {/* Weather Icon */}
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />

      {/* Temperature */}
      <p className="temp">{Math.round(data.main.temp)}°C</p>

      {/* Description */}
      <p className="desc">{data.weather[0].description}</p>

      {/* Extra Details */}
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Feels Like: {Math.round(data.main.feels_like)}°C</p>
    </div>
  );
}

export default WeatherCard;