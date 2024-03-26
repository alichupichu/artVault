import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const obrasSlice = createSlice({
  name: "obras",
  initialState,
  reducers: {
    setObrasData: (state, { payload }) => {
      state.obrasData = payload;
    },
  },
});

export const { setObrasData } = obrasSlice.actions;

export const selectObrasData = (state) => state.obras.obrasData;

export default obrasSlice.reducer;
