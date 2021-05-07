import { useState } from "react";

const SearchItem = ({ item, setNominee }) => {
  let [disabled, setDisabled] = useState(false);
  return (
    <div>
      {item.Title}
      <button
        disabled={disabled}
        onClick={() => {
          setNominee((movies) => [item, ...movies]);
          setDisabled(!disabled);
        }}
      >
        Nominate
      </button>
    </div>
  );
};

export default SearchItem;
