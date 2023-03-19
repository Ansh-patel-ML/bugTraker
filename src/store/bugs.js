import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
// const BUG_ADD = "bugAddded";
// const BUG_REMOVE = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

// export function bugAdded(description) {
//   return {
//     type: BUG_ADD,
//     payload: {
//       description,
//     },
//   };
// }

// export function bugResolved(id) {
//   return {
//     type: BUG_RESOLVED,
//     payload: {
//       id,
//     },
//   };
// }

// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");

let lastId = 0;
// let initialState = [];

// export default createReducer([], {
//   // action:function (event:eventHandler)
//   [bugAdded.type]: (state, action) => {
//     state.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolve: false,
//     });
//   },
//   [bugResolved.type]: (state, action) => {
//     const bugIndex = state.findIndex((state) => state.id === action.payload.id);
//     state[bugIndex].resolve = true;
//   },
//   [bugRemoved.type]: (state, action) => {
//     const bugIndex = state.findIndex((state) => state.id === action.payload.id);
//     state.splice(bugIndex, 1);
//   },
// });

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
