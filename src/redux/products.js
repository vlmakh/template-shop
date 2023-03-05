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
  reducers: {
    priceup: state => {
      state.items.sort((a, b) => a.price - b.price);
    },
    pricedown: state => {
      state.items.sort((a, b) => b.price - a.price);
    },
    nameup: state => {
      state.items.sort((a, b) => a.title.localeCompare(b.title));
    },
    namedown: state => {
      state.items.sort((a, b) => b.title.localeCompare(a.title));
    },
  },
});

export const { priceup, pricedown, nameup, namedown } = productsSlice.actions;
