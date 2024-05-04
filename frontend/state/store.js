import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from './quotesSlice';

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  }
});

export default store;
