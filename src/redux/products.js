import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload],
          isLoading: false,
        };
      })
      .addCase(fetchProducts.rejected, state => {
        state.isLoading = false;
      });
  },
  reducers: {},
});
