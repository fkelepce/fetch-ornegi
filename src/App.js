import React, { useState } from "react";
import "./styles.css";

import CountryList from "./CountryList";
import SearchForum from "./SearchForum";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = event => setSearch(event.target.value);

  console.log(search)

  return (
    <div className="App">
      <h1>React API'den data çekme Dersi</h1>
      <SearchForum search={search} onSearchChange={handleChange}/>
      <CountryList search={search} />
    </div>
  );
}

export default App;
