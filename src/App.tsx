import Weather from './Weather'
import Search from './Search'
import './App.css'
import { useState } from 'react';

const NUMBER_OF_CARDS = 8;

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
      <Weather weatherPeriods={weatherPeriods} numberOfCards={8} />
    </div>
  );
}

export default App
