import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "./Thunks";
const key = "api_key=29ab4f75bb2db1deeb32771398e6c025";
const base = "https://api.themoviedb.org/3";

const findMovies = createAsyncThunk(
  "movie/findMovies",
  async (data: { path: string; query: string }) => {
    const { path, query } = data;
    return await getData(
      `${base}/${path}?${key}&${query}&language=en-US&page=1&include_adult=false`
    );
  }
);

export default findMovies;
