import ls from "local-storage";

const NominatedItem = ({ item, removeNominee }) => {
  return (
    <li>
      {item.Title} ({item.Year})
      <button
        id="button"
        onClick={() => {
          removeNominee((movies) => {
            let moviesFiltered = movies.filter(
              ({ imdbID }) => imdbID !== item.imdbID
            );
            ls.set("nominatedMovies", moviesFiltered);
            return moviesFiltered;
          });
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default NominatedItem;
