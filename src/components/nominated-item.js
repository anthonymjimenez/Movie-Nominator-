import { useState } from "react";

const NominatedItem = ({ item, removeNominee, nominatedMovies }) => {
  return (
    <div>
      {item.Title}
      <button
        onClick={() => {
          removeNominee((movies) =>
            movies.filter(({ imdbID }) => imdbID !== item.imdbID)
          );
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default NominatedItem;
