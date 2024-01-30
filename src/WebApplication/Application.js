import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";

const Application = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery();
      console.log(data);
    }
  };
  return (
    <div className="main-con">
      <div className="search">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={search}
        />
      </div>
    </div>
  );
};
export default Application;
