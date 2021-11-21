export const getMyMovie = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=api_key=29ab4f75bb2db1deeb32771398e6c025&language=en-US&page=1"
  )
    .then((resp) => resp.json())
    .then((data) => data.results);
};
