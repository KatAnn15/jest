import * as React from "react";
import { useDispatch } from "react-redux";
import findMovies from "../../Redux/AsyncThunk";

const SearchBar: React.FC = () => {
  const searchMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3)
      dispatch(
        findMovies({ path: "search/movie", query: `query=${e.target.value}` })
      );
  };
  const dispatch = useDispatch();
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        data-testid="test_searchInput"
        onChange={(e) => searchMovies(e)}
      />
    </div>
  );
};

export default SearchBar;
