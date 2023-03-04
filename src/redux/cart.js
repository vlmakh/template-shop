import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
      // console.log(action.payload);
      // return;
    },
    deleteProduct: (state, action) => {
      // console.log(action.payload);
      return [...state.items.filter(el => el !== action.payload)];
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
