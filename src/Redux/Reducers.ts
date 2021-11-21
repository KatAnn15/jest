import { createSlice } from "@reduxjs/toolkit";
import findMovies from "./AsyncThunk";

const newUserInit: {
  value: { name: string; age: number }[];
} = {
  value: [
    {
      name: "Lily",
      age: 25,
    },
  ],
};

export const UserSlice = createSlice({
  name: "newUser",
  initialState: newUserInit,
  reducers: {
    addNewUser: (state, action) => {
      state.value = state.value.concat([action.payload]);
    },
    resetList: (state) => {
      state.value = newUserInit.value;
    },
  },
});

const moviesInit: { value: any[] } = {
  value: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesInit,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findMovies.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { addNewUser, resetList } = UserSlice.actions;
