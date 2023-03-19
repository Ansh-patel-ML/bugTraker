import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./bugs";
import reducer from "./reducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = configureStore({
  reducer: reducer,
});

export default store;
