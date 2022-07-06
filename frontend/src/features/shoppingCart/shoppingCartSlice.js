import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: JSON.parse(localStorage.getItem('shoppingcart')) || [],
  isLoading: true,
  error: '',
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addShoppingCart: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem('shoppingcart', JSON.stringify(state.value));
    },
    updateShoppingCart: (state, action) => {
      const index = state.value.findIndex(
        (a) => a.user === action.payload.user && a.product === action.payload.product,
      );
      state.value[index] = action.payload;
      localStorage.setItem('shoppingcart', JSON.stringify(state.value));
    },
  },
  extraReducers: (builder) => {},
});

export const { addShoppingCart, updateShoppingCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
