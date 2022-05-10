import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { response } from "express";
import authService from "./authService"

//Usage is for gettin user from local
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: null ? user : null,
  isError: false,
  isSccess: false,
  IsLoading: false,
  message: "",
};

//for registering user service
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) =>{
    try {
return await authService.register(user)
    }catch (error) {
        //FOR CHECKING UP ERRORS
        const message = (error.response && error.response.data && response.data.message) 
        || error.message || error.toString()
        //Rejecting and passsing a message from the payload further in the code
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      //to reset everything after account creation
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
      builder
      .addCase(register.pending, (state) =>{
          state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSccess = true
          state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
      })
  },
})
//export reset componenets
export const {reset} = authSlice.actions
export default authSlice.reducer