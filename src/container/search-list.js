import SearchItem from "../components/search-item";

const SearchList = ({ results, setNominee, nominatedMovies }) => {
  return (
    <>
      {results?.map((search) => (
        <SearchItem
          item={search}
          setNominee={setNominee}
          nominatedMovies={nominatedMovies}
        />
      ))}
    </>
  );
};

export default SearchList;
