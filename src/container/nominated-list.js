import NominatedItem from "../components/nominated-item";
import ls from "local-storage";
import { useEffect, useState } from "react";

const NominatedList = ({ nominatedMovies, removeNominee }) => {
  let [categoryName, setCategory] = useState("");

  useEffect(() => {
    if (ls.get("categoryName") && nominatedMovies.length === 5) {
      setCategory(ls.get("categoryName"));
    }
  }, [nominatedMovies.length]);

  return (
    <>
      <h3>
        {" "}
        {nominatedMovies.length === 5 ? (
          <> {categoryName} </>
        ) : (
          <> Nomination </>
        )}{" "}
      </h3>
      <ul className="nominated-movie-list">
        {nominatedMovies.map((search) => (
          <NominatedItem item={search} removeNominee={removeNominee} />
        ))}
      </ul>
      {nominatedMovies.length === 5 && (
        <div className="nominated-form">
          {" "}
          <form>
            <label> You are done! Please name your nomination category. </label>
            <input
              id="nominated-input"
              type="text"
              onChange={(e) =>
                setCategory(() => {
                  ls.set("categoryName", e.target.value);
                  return e.target.value;
                })
              }
            />{" "}
          </form>
        </div>
      )}
    </>
  );
};

export default NominatedList;
