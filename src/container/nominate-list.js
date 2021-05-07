import NominatedItem from "../components/nominated-item";

const NominatedList = ({ results, removeNominee }) => {
  return (
    <>
      {results?.map((search) => (
        <NominatedItem item={search} setNominee={removeNominee} />
      ))}
    </>
  );
};

export default NominatedList;
