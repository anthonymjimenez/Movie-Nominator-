import { useEffect, useState } from "react";

const SearchItem = ({ item, setNominee, nominatedMovies }) => {
  let [disabled, setDisabled] = useState(false);

  useEffect(() => {
    let ids = nominatedMovies.map(({ imdbID }) => imdbID);
    if (!ids.includes(item.imdbID)) {
      setDisabled(false);
    }
  }, [nominatedMovies]);

  return (
    <div>
      {item.Title}
      <button
        disabled={disabled}
        onClick={() => {
          setNominee((movies) => [item, ...movies]);
          setDisabled(true);
        }}
      >
        Nominate
      </button>
    </div>
  );
};

export default SearchItem;
