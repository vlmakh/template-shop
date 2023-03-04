import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
      // return;
    },
    deleteProduct: (state, action) => {
      return [...state.filter(product => product.id !== action.payload)];
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
