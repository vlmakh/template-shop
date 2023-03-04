import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import toast from 'react-hot-toast';
import { auth } from 'utils/firebase';
import firebase from 'firebase/compat/app';

axios.defaults.baseURL = 'https://fakestoreapi.com/';
// const errorMsg = "Something's wrong. Please update page and try again";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async _ => {
    try {
      const response = await axios.get(`/products`);
      return response.data;
    } catch (error) {
      // toast.error(errorMsg);
      console.log(error);
    }
  }
);

export const fetchProductItem = createAsyncThunk(
  'products/fetchProductItem',
  async id => {
    try {
      const response = await axios.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      // toast.error(errorMsg);
      console.log(error);
    }
  }
);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, credentials);
      token.set(response.data.token);
      // toast.success(`${response.data.user.name} was registered`);
      return response.data;
    } catch (error) {
      // toast.error('Probably such email was alredy registered');
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const loginGoogle = createAsyncThunk(
  'auth/loginGoogle',
  async (_, thunkAPI) => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await auth.signInWithPopup(provider);
      const result = { ...user._delegate };
      // console.log(result);
      return result;
    } catch (error) {
      // toast.error('There is mistake in login or password, please try again');
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      // toast.error('There is mistake in login or password, please try again');
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const checkCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    if (state.auth.token === null) {
      return thunkAPI.rejectWithValue('');
    }

    token.set(state.auth.token);

    try {
      const response = await axios.get(`/users/current`);
      return response.data;
    } catch (error) {
      // toast.error('Please try to login again');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post(`/users/logout`);
    token.unset();
  } catch (error) {
    // toast.error(errorMsg);
  }
});

export const fetchSelected = async array => {
  const arrayOfProducts = array.map(async productId => {
    return await axios
      .get(`/products/${productId}`)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
  });

  const response = await Promise.all(arrayOfProducts);
  // console.log(response);
  return response;
};
