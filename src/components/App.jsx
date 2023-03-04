import { ThemeProvider } from '@emotion/react';
import { theme } from 'utils/theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage';
import { ProductsPage } from 'pages/ProductsPage';
import { ProductItemPage } from 'pages/ProductItemPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { PersonalPage } from 'pages/PersonalPage';
import { ShoppingCart } from 'pages/ShoppingCart';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route
            path="products/:productId"
            element={<ProductItemPage />}
          ></Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="cabinet" element={<PersonalPage />} />
          <Route path="cart" element={<ShoppingCart />} />
        </Route>
      </Routes>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          
        }}
      />
    </ThemeProvider>
  );
};
