function Forecast({ forecast }) {
  return (
    <div className="forecast">
      {forecast.map((item) => (
        <div key={item.dt} className="forecast-card">
          <p>
            {new Date(item.dt_txt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p>{Math.round(item.main.temp)}°C</p>
        </div>
      ))}
    </div> 
  );
}

export default Forecast;