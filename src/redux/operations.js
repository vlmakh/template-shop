import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { auth } from 'utils/firebase';
import firebase from 'firebase/compat/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

axios.defaults.baseURL = 'https://fakestoreapi.com/';
const errorMsg = "Something's wrong. Please update page and try again";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/products`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchSelected = async array => {
  try {
    const arrayOfProducts = array.map(async ({ id, qty }) => {
      return await axios
        .get(`/products/${id}`)
        .then(response => {
          return { ...response.data, qty };
        })
        .catch(error => console.log(error));
    });

    const response = await Promise.all(arrayOfProducts);
    return response;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const fetchProductItem = createAsyncThunk(
  'products/fetchProductItem',
  async id => {
    try {
      const response = await axios.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const { email, accessToken } = response.user;
      return { email, accessToken };
    } catch (error) {
      toast.error('Probably such email was alredy registered');
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
      const { email, accessToken, displayName } = user._delegate;
      return { email, accessToken, displayName };
    } catch (error) {
      toast.error('There is mistake in login or password, please try again');
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const { email, accessToken } = response.user;
      return { email, accessToken };
    } catch (error) {
      toast.error('There is mistake in login or password, please try again');
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await auth.signOut();
  } catch (error) {
    toast.error(errorMsg);
    return thunkAPI.rejectWithValue('');
  }
});
