import { combineReducers } from "redux";
import bugReducer from "./bugs";
import projectReducer from "./projects";
export default combineReducers({
  bug: bugReducer,
  project: projectReducer,
});