import { createSlice } from "@reduxjs/toolkit";

const takenUsersSlice = createSlice({
  name: 'takenUsers',
  initialState:{
    takenUsers: {
      results: [],
    },
  },
  reducers: {
    fetchUsers(state, action) {
      state.takenUsers =  action.payload;
    },
  }
});

export default takenUsersSlice.reducer;

export const {
  fetchUsers
} = takenUsersSlice.actions;
