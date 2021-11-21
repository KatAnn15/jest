export const getData = async (url: string) => {
  const movies = await fetch(url);
  const json = await movies.json();
  return json.results;
};

exports.getData = getData;
