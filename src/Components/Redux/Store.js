// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './combineReducer';

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, dev tools, etc. here if needed
});

export default store;
