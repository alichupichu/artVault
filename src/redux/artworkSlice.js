import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const artworkSlice = createSlice({
  name: "artwork",
  initialState,
  reducers: {
    setArtworkData: (state, { payload }) => {
      state.artworkData = payload;
    },
  },
});

export const { setArtworkData } = artworkSlice.actions;

export const selectArtworkData = (state) => {
  state.artwork.artworkData;
};

export default artworkSlice.reducer;
