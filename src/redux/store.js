import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import obrasReducer from "./obrasSlice";

export const store = configureStore(
  {
    reducer: {
      obras: obrasReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
