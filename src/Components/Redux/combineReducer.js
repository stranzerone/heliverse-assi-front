// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './Main';

const rootReducer = combineReducers({
  users: usersReducer,
  // Add other reducers here if needed
});

export default rootReducer;
