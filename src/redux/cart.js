import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: '',
  reducers: {
    filterChange: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterChange } = cartSlice.actions;
