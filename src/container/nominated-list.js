import NominatedItem from "../components/nominated-item";
import ls from "local-storage";
import { useEffect, useState } from "react";

const NominatedList = ({ nominatedMovies, removeNominee }) => {
  let [categoryName, setCategory] = useState("");
  let [categoryVisible, setCategoryVisible] = useState("");
  const visibleCategory = (e) => {
    e.preventDefault();
    setCategoryVisible(true);
  };
  return (
    <>
      {nominatedMovies.length === 5 && categoryVisible && <> {categoryName} </>}

      {nominatedMovies.map((search) => (
        <NominatedItem item={search} removeNominee={removeNominee} />
      ))}
      {nominatedMovies.length === 5 && (
        <div style={{ color: "green" }}>
          {" "}
          You are done! Please name your nomination category.{" "}
          <form onSubmit={(e) => visibleCategory(e)}>
            <input
              type="text"
              onChange={(e) =>
                setCategory(() => {
                  ls.set("categoryName", e.target.value);
                  return e.target.value;
                })
              }
            />{" "}
            <button>Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default NominatedList;
