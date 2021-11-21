import findMovies from "../Redux/AsyncThunk";
import { getMyMovie } from "../Components/Search/Fetch/Fetch";
import { store } from "../test-utils";

test("get my movies", async () => {
  const movies = await getMyMovie();
  expect(movies.length).toBeGreaterThan(0);
});

test("get my thunk data", () => {
  store
    .dispatch(findMovies({ path: "some path", query: "some-query" }))
    .then(() => {
      const movies = store.getState().movies;
      expect(movies.value.length).toBeGreaterThan(0);
    });
});
