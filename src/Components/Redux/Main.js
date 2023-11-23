// usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
  },
  reducers: {
    addUserToList: (state, action) => {
      state.userList.push(action.payload);
    },
    removeUserFromList: (state, action) => {
      // Assuming action.payload is the user id
      state.userList = state.userList.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUserToList, removeUserFromList } = usersSlice.actions;
export const selectUserList = (state) => state.users.userList;
export default usersSlice.reducer;
