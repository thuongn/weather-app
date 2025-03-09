import Weather from './Weather'
import Search from './Search'
import './App.css'

function App() {
  const handleSearch = (query: string) => {
    // TODO: Will implement API call here
    console.log('Searching for:', query);
  };

  return (
    <div className="app-container">
      <h1>Weather Forecast</h1>
      <Search onSearch={handleSearch} />
      <Weather numberOfDays={5} />
    </div>
  );
}

export default App
