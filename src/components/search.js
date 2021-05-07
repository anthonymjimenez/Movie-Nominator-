import axios from "axios";

const Search = ({ setSearch }) => {
  const updateSearch = async ({ target: { value } }) => {
    console.log(value);
    let response = await axios.get(
      `http://www.omdbapi.com/?s=${value}&apikey=15c8d29e&type=%22movie%22`
    );
    if (response.data.Response !== "False") {
      console.log(response.data.Response);
      setSearch(response.data);
    } else {
      setSearch([]);
    }
  };
  return (
    <>
      <form>
        <input
          onChange={(e) => updateSearch(e)}
          type="search"
          placeholder="Search for movies..."
        ></input>
      </form>
    </>
  );
};

export default Search;
