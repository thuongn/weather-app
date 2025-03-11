import WeatherCard from './WeatherCard';

type WeatherDayProps = {
  numberOfCards: number;
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

const Weather = ({ numberOfCards, weatherPeriods }: WeatherDayProps) => {

  if (!weatherPeriods) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="weather-container">
      {weatherPeriods.slice(0, numberOfCards).map((period) => (
        <WeatherCard key={period.number} data={period} />
      ))}
    </div>
  );
}

export default Weather;
