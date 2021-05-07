import NominatedItem from "../components/nominated-item";
import ls from "local-storage";

const NominatedList = ({ nominatedMovies, removeNominee }) => {
  return (
    <>
      {nominatedMovies.map((search) => (
        <NominatedItem
          item={search}
          removeNominee={removeNominee}
          nominatedMovies={nominatedMovies}
        />
      ))}
      {nominatedMovies.length === 5 && (
        <div style={{ color: "red" }}> You are done </div>
      )}
    </>
  );
};

export default NominatedList;
