import { useState, useEffect } from 'react';

function WeatherApp() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=72b971780557d7931113d1e8118af613`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
      setError(null);
    } catch (error) {
      console.error('There was an error!', error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter city:
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <div>Error: {error.message}</div>}
      {!error && !data && <div>Please enter a city name to see the weather.</div>}
      {data && (
        <div>
          <h2>{data.name}, {data.sys.country}</h2>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='' />
          <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
          <p>Description: {data.weather[0].description}</p>
          <p>Feels like: {Math.round(data.main.feels_like - 273.15)}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Pressure: {data.main.pressure} hPa</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
