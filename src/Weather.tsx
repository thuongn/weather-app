// import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

type WeatherDayProps = {
  numberOfDays: number;
  weatherPeriods: Array<WeatherData>;
}

export interface WeatherData {
  number: number;
  name: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: string;
}

// interface WeatherResponse {
//   properties: {
//     periods: WeatherData[];
//   };
// }

const WEATHER_API = "https://api.weather.gov/gridpoints/SEW/130,61/forecast";

const Weather = ({ numberOfDays, weatherPeriods }: WeatherDayProps) => {
  // // const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  // useEffect(() => {
  //   const getWeather = async () => {
  //     const response = await fetch(WEATHER_API);
  //     const data = await response.json();
  //     setWeatherData(data);
  //   }

  //   getWeather();
  // }, []);

  if (!weatherPeriods) {
    return <div>Loading weather data...</div>;
  }

  // const { periods } = weatherData.properties;

  return (
    <div className="weather-container">
      {weatherPeriods.slice(0, numberOfDays).map((period) => (
        <WeatherCard key={period.number} data={period} />
      ))}
    </div>
  );
}

export default Weather;
