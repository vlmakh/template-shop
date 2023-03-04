import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {};
      newProduct.id = action.payload;
      newProduct.qty = 1;

      const idx = state.items.findIndex(item => newProduct.id === item.id);

      if (idx === -1) {
        state.items.push(newProduct);

        return;
      }
      state.items[idx].qty += 1;
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
