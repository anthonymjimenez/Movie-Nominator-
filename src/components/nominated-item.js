import { useEffect, useState } from "react";
import ls from "local-storage";

const NominatedItem = ({ item, removeNominee, nominatedMovies }) => {
  return (
    <div>
      {item.Title}
      <button
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
    </div>
  );
};

export default NominatedItem;
