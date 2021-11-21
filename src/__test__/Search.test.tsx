import { fireEvent, screen } from "@testing-library/react";
import * as React from "react";
import SearchResults from "../Components/Search/SearchResults";
import { query } from "../test-utils";
import SearchBar from "../Components/Search/SearchBar";

test("display fetched movies", async () => {
  const searchBar = query("test_searchInput", <SearchBar />);
  const list = query("test_searchResults", <SearchResults />);
  fireEvent.input(searchBar, { target: { value: "avenger" } });
  await screen.findByTestId("test_itemTitle");
  expect(list.children.length).toBeGreaterThan(0);
});
