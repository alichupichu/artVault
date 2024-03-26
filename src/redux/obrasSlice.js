import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const obrasSlice = createSlice({
  name: "obras",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setObrasData: (state, { payload }) => {
      state.obrasData = payload;
    },
  },
});

export const { increment, decrement } = obrasSlice.actions;

export const selectCount = (state) => state.obras.value;

export default obrasSlice.reducer;
