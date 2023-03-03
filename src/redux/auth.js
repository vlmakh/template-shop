import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, checkCurrentUser, logout } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isCheckingLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isCheckingLogin = false;
      })
      .addCase(register.rejected, state => {
        state.user = { name: null, email: null };
        state.isCheckingLogin = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isCheckingLogin = false;
      })
      .addCase(login.rejected, state => {
        state.user = { name: null, email: null };
        state.isCheckingLogin = false;
      })
      .addCase(checkCurrentUser.fulfilled, (state, action) => {
        state.isCheckingLogin = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
      })
      .addCase(checkCurrentUser.rejected, state => {
        state.user = { name: null, email: null };
        state.isCheckingLogin = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isCheckingLogin = false;
      })
      .addCase(logout.rejected, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isCheckingLogin = false;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          checkCurrentUser.pending
        ),
        state => {
          state.isCheckingLogin = true;
        }
      );
  },
  reducers: {},
});
