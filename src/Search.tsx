import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
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
