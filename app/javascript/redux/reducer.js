import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchGeetingAsyncThank = createAsyncThunk("greetings/fetchGeeting", async () => {
  const response = await axios.get('http://127.0.0.1:5000/api/v1/greetings')
                              .catch(() => false);
  return response.data;
});

const initialState = {
  greetings: []
};

const greetReducer = createSlice({ 
  name: "greeting",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGeetingAsyncThank.fulfilled, (state, {payload}) => {
      state.greetings = payload;
    });
  }
});

const getAllGreetings = (state) => state.greeting.greetings;
export { fetchGeetingAsyncThank, getAllGreetings };
export default greetReducer.reducer;
