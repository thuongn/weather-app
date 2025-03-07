import React from "react";
import { WeatherData } from "./Weather";

interface WeatherCardProps {
  data: WeatherData;
}

const backgroundColors: { [key: string]: string } = {
  "1": "whitesmoke",
  "2": "indianred",
  "3": "aquamarine",
  "4": "darkkhaki",
  "5": "darksalmon",
  "6": "coral",
  "7": "cornflowerblue",
  "8": "darkolivegreen",
  "9": "darkseagreen",
  "10": "darkslategray",
  "11": "darkslateblue",
  "12": "goldendrod",
  "13": "darkred",
  "14": "darkturquoise",
  "15": "gainsboro",
}
const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { number, name, shortForecast, detailedForecast, temperature, temperatureUnit, windSpeed, windDirection } = data;

  return (
    <div
      className="weather-card"
    >
      <div className="weather-card-header" style={{ backgroundColor: backgroundColors[number.toString()] }}>
        <h2>{name}</h2>
      </div>
      <div className="weather-card-content">
        <p className="short-forecast">{shortForecast}</p>
        <p className="temperature">{temperature} {temperatureUnit}</p>
        <p className="wind-speed">{windSpeed} {windDirection}</p>
        <p className="detailed-forecast">{detailedForecast}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
