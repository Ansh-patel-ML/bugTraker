import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;

const user = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
        bugId: undefined,
      });
    },
  },
});

export const { addUser } = user.actions;
export default user.reducer;
