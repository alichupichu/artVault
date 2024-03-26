import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import artworkReducer from "./artworkSlice";

export const store = configureStore(
  {
    reducer: {
      obras: artworkReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
