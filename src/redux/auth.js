import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  login,
  loginGoogle,
  checkCurrentUser,
  logout,
} from './operations';

const initialState = {
  name: null,
  email: null,
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
        state.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isCheckingLogin = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isCheckingLogin = false;
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.name = action.payload.displayName;
        state.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isCheckingLogin = false;
      })
      .addCase(checkCurrentUser.fulfilled, (state, action) => {
        state.isCheckingLogin = false;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(
          logout.fulfilled,
          register.rejected,
          login.rejected,
          loginGoogle.rejected,
          checkCurrentUser.rejected,
          logout.rejected
        ),
        state => {
          state.name = null;
          state.email = null;
          state.token = null;
          state.isLoggedIn = false;
          state.isCheckingLogin = false;
        }
      )
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          loginGoogle.pending,
          checkCurrentUser.pending
        ),
        state => {
          state.isCheckingLogin = true;
        }
      );
  },
  reducers: {},
});
