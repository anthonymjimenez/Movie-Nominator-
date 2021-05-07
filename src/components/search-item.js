import { useEffect, useState } from "react";
import ls from "local-storage";
const SearchItem = ({ item, setNominee, nominatedMovies }) => {
  let [disabled, setDisabled] = useState(false);
  let ids = nominatedMovies.map(({ imdbID }) => imdbID);

  useEffect(() => {
    if (!ids.includes(item.imdbID)) {
      setDisabled(false);
    }
    console.log(nominatedMovies, "HELLO");
  }, [nominatedMovies]);

  useEffect(() => {
    console.log("itemid", ids.includes(item.imdbID));
    console.log("Are you there?");
  });
  return (
    <div>
      {item.Title}
      <button
        disabled={(() => {
          let ids = nominatedMovies.map(({ imdbID }) => imdbID);
          if (!ids.includes(item.imdbID)) {
            return true;
          } else if (ids.includes(item.imdbID)) {
            return false;
          }
        })()}
        onClick={() => {
          setNominee((movies) => {
            if (movies.length === 5) return movies;
            setDisabled(true);
            ls.set("nominatedMovies", nominatedMovies);
            return [item, ...movies];
          });
        }}
      >
        Nominate
      </button>
    </div>
  );
};

export default SearchItem;
