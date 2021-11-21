import * as React from "react";
import { useSelector } from "react-redux";
import { moviesSlice } from "src/Redux/Reducers";
import ResultItem from "./ResultItem";

const SearchResults: React.FC = () => {
  const movies = useSelector(
    (state: { movies: { value: any[] } }) => state.movies.value
  );
  return (
    <div className="search-results-wrapper" data-testid="test_searchResults">
      {movies.map((movie, i) => (
        <ResultItem data={movie} key={"sr" + i} />
      ))}
    </div>
  );
};

export default SearchResults;
