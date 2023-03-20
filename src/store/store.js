import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { middleware } from "./middleware";
import { applyMiddleware } from "redux";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware(), middleware],
});

export default store;
