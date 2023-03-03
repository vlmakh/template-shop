import { createSlice } from '@reduxjs/toolkit';
import { fetchProductItem } from './operations';

const initialState = {
  item: null,
  isLoading: false,
};

export const productItemSlice = createSlice({
  name: 'productItem',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProductItem.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProductItem.fulfilled, (state, action) => {
        return {
          ...state,
          item: { ...action.payload },
          isLoading: false,
        };
      })
      .addCase(fetchProductItem.rejected, state => {
        state.isLoading = false;
      });
  },
  reducers: {},
});
