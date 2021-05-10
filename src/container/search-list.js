import SearchItem from "../components/search-item";

const SearchList = ({
  searchTerm,
  searchResults,
  setNominee,
  nominatedMovies,
}) => {
  return (
    <>
      <h3>
        {searchTerm === ""
          ? "Start searching..."
          : `Results for "${searchTerm}"`}
      </h3>
      <ul>
        {searchResults?.map((search) => (
          <SearchItem
            item={search}
            setNominee={setNominee}
            nominatedMovies={nominatedMovies}
          />
        ))}
      </ul>
    </>
  );
};

export default SearchList;
