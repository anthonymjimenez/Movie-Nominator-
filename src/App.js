import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search";
import NominatedList from "./container/nominated-list";
import SearchList from "./container/search-list";
import ls from "local-storage";

function App() {
  let [search, setSearch] = useState([]);
  let [nominatedMovies, setNominee] = useState([]);
  useEffect(() => {
    ls.get("nominatedMovies") && setNominee(ls.get("nominatedMovies"));
  }, []);
  return (
    <div className="App">
      {console.log(search, "search")}
      <Search setSearch={setSearch} />
      <br />

      <SearchList
        results={search.Search}
        setNominee={setNominee}
        nominatedMovies={nominatedMovies}
      />
      <br />
      <NominatedList
        nominatedMovies={nominatedMovies}
        removeNominee={setNominee}
      />
      {console.log("ping", nominatedMovies)}
    </div>
  );
}

export default App;
