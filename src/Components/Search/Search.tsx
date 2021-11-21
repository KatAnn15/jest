import * as React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import "./Search.scss";

const Search: React.FC = () => {
  return (
    <div className="search-wrapper">
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Search;
