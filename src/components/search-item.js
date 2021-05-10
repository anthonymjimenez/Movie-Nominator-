import ls from "local-storage";
const SearchItem = ({ item, setNominee, nominatedMovies }) => {
  let ids = nominatedMovies.map(({ imdbID }) => imdbID);

  return (
    <li>
      {item.Title} ({item.Year})
      <button
        id="button"
        disabled={(() => {
          if (ids.includes(item.imdbID)) {
            return true;
          }
          return false;
        })()}
        onClick={() => {
          setNominee((movies) => {
            if (movies.length === 5) return movies;
            ls.set("nominatedMovies", [item, ...movies]);
            return [item, ...movies];
          });
        }}
      >
        Nominate
      </button>
    </li>
  );
};

export default SearchItem;
