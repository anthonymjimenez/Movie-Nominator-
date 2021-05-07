import NominatedItem from "../components/nominated-item";
import ls from "local-storage";
import { useState } from "react";

const NominatedList = ({ nominatedMovies, removeNominee }) => {
  let [categoryName, setCategory] = useState("");
  return (
    <>
      {categoryName !== "" && nominatedMovies.length === 5 && (
        <> {categoryName} </>
      )}
      {nominatedMovies.map((search) => (
        <NominatedItem item={search} removeNominee={removeNominee} />
      ))}
      {nominatedMovies.length === 5 && (
        <div style={{ color: "red" }}>
          {" "}
          You are done! Please name your nomination category.{" "}
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
          />{" "}
        </div>
      )}
    </>
  );
};

export default NominatedList;
