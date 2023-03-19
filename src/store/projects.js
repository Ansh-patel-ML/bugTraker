import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: action.payload.description,
      });
    },
  },
});

export const { projectAdded } = projectSlice.actions;
export default projectSlice.reducer;
