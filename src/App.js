import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search";
import NominatedList from "./container/nominated-list";
import SearchList from "./container/search-list";
import ls from "local-storage";

function App() {
  let [search, setSearch] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [nominatedMovies, setNominee] = useState([]);

  useEffect(() => {
    ls.get("nominatedMovies") && setNominee(ls.get("nominatedMovies"));
  }, []);
  return (
    <div className="App">
      <div className="header">
        <h1>The Shoppies </h1>
      </div>
      <div className="search">
        <Search setSearch={setSearch} setSearchTerm={setSearchTerm} />
        <br />
      </div>

      <div className="search-list">
        <SearchList
          searchTerm={searchTerm}
          searchResults={search.Search}
          setNominee={setNominee}
          nominatedMovies={nominatedMovies}
        />
      </div>
      <div className="nominated-list">
        <NominatedList
          nominatedMovies={nominatedMovies}
          removeNominee={setNominee}
        />
      </div>
    </div>
  );
}

export default App;
