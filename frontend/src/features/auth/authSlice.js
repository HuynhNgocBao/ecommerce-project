import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getUser = createAsyncThunk('api/user', async()=>{
    const response = await axios.get('/api/user');
    return response.data;
})

const initialState = {
    user: null,
    isLoading: true,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getUser.pending, state=>{
            state.isLoading = true;
        })
        builder.addCase(getUser.fulfilled, (state,action)=>{
            state.user = action.payload;
            state.isLoading = false;
        })
    }
})

export default authSlice.reducer;