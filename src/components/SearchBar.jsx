import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div className="search-bar">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={() => onSearch(city.trim())}>
       Search
      </button> 
    </div>
  );
}

export default SearchBar;