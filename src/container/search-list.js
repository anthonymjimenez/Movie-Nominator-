import SearchItem from "../components/search-item";

const SearchList = ({ results, setNominee }) => {
  return (
    <>
      {results?.map((search) => (
        <SearchItem item={search} setNominee={setNominee} />
      ))}
    </>
  );
};

export default SearchList;
