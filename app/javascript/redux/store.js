import { configureStore } from "@reduxjs/toolkit";
import greetReducer from "./reducer";

const store = configureStore({
  reducer: {
    greeting: greetReducer
  }
});

export default store;