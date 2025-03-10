import React, { useState } from 'react';

const WEATHER_POINTS_API = "https://api.weather.gov/points/";

interface SearchProps {
  onSearch: (query: string) => void;
}

interface Station {
  id: string;
  geometry: {
    coordinates: number[];
  };
  properties: {
    name: string;
  }
}

interface StationCoordinates {
  latitude: number;
  longitude: number;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const findStation = async (location: Array<string>): Promise<StationCoordinates | null> => {
    const [city, state] = location;
    const STATION_API = `https://api.weather.gov/stations?state=${state.toUpperCase()}&limit=500`;
    const response = await fetch(STATION_API);
    const data = await response.json();
    const stations = data.features;
    const station = stations.find((station: Station) => station.properties.name.toLowerCase().includes(city.toLowerCase()));
    if (station) {
      console.log(`station: ${station.properties.name}`);
      return {
        latitude: station.geometry.coordinates[0],
        longitude: station.geometry.coordinates[1]
      };
    }
    return null;
  }

  const getForecastURL = async (station: StationCoordinates | null): Promise<string> => {
    if (!station) {
      return "";
    }
    const { latitude, longitude } = station;
    const response = await fetch(`${WEATHER_POINTS_API}${longitude},${latitude}`);
    const data = await response.json();
    return data.properties.forecast;
  }

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    const location = query.trim().split(/\s*,\s*/);

    // query station api and get the station coordinates
    const station = await findStation(location);

    // get the weather forecast url
    const forecastURL = await getForecastURL(station);

    // call the search callback with the forecast url
    if (forecastURL) {
      onSearch(forecastURL);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter city and state (e.g. Seattle, WA)"
            value={query}
            onChange={handleChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
