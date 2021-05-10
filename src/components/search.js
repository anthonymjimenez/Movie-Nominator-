import axios from "axios";

const Search = ({ setSearch, setSearchTerm }) => {
  const updateSearch = async ({ target: { value } }) => {
    try {
      let response = await axios.get(
        `https://www.omdbapi.com/?s=${value}&apikey=15c8d29e&type=%22movie%22`
      );
      response.data.Response !== "False"
        ? setSearch(response.data)
        : setSearch([]);

      setSearchTerm(value);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h4 id="h4-movie-title">Movie title</h4>
      <form className="search-form">
        <div className="search-icon">&#128269;</div>
        <input
          id="search-input"
          onChange={(e) => updateSearch(e)}
          type="search"
          placeholder="Search for movies..."
        ></input>
      </form>
    </>
  );
};

export default Search;
