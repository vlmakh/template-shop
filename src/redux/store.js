import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth';
import { productsSlice } from './products';
import { productItemSlice } from './productItem';
import { cartSlice } from './cart';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const authPersistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

const cartPersistedReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    productItem: productItemSlice.reducer,
    auth: authPersistedReducer,
    cart: cartSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
