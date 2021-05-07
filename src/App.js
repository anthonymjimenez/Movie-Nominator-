import { useState } from "react";
import "./App.css";
import Search from "./components/search";
import SearchList from "./container/search-list";
function App() {
  let [search, setSearch] = useState([]);
  let [nominatedMovies, setNominee] = useState([]);
  return (
    <div className="App">
      {console.log(search, "search")}
      <Search setSearch={setSearch} />
      <SearchList results={search.Search} setNominee={setNominee} />

      {console.log("ping", nominatedMovies)}
    </div>
  );
}

export default App;
