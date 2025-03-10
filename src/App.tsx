import Weather from './Weather'
import Search from './Search'
import './App.css'
import { useState } from 'react';

function App() {
  const [weatherPeriods, setWeatherPeriods] = useState([]);

  const handleSearch = async (forecastURL: string) => {
    // get the weather forecast data and set the weather periods state
    const response = await fetch(forecastURL);
    const data = await response.json();
    const weatherPeriods = data.properties.periods;
    setWeatherPeriods(weatherPeriods);
  };

  return (
    <div className="app-container">
      <h1>Weather Forecast</h1>
      <Search onSearch={handleSearch} />
      <Weather weatherPeriods={weatherPeriods} numberOfDays={5} />
    </div>
  );
}

export default App
