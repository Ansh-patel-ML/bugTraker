import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
let lastId = 0;

const bugSlice = createSlice({
  name: "Bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolve: false,
      });
    },
    bugRemoved: (bugs, action) => {
      const bugIndex = bugs.findIndex((bugs) => bugs.id === action.payload.id);
      bugs.splice(bugIndex, 1);
    },
    bugResolved: (bugs, action) => {
      const bugIndex = bugs.findIndex((bugs) => bugs.id === action.payload.id);
      bugs[bugIndex].resolve = true;
    },
  },
});

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bug,
  (bug) => bug.filter((bug) => !bug.resolve)
);
export const { bugAdded, bugRemoved, bugResolved } = bugSlice.actions;
export default bugSlice.reducer;
