export const selectProducts = state => state.products.items;
export const selectIsLoading = state => state.products.isLoading;

export const selectProductItem = state => state.productItem.item;
export const selectIsLoadingProduct = state => state.productItem.isLoading;

export const selectUser = state => state.auth;
export const selectIsCheckingLogin = state => state.auth.isCheckingLogin;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectCart = state => state.cart.items;

export const selectCategory = state => state.products.category;

export const selectFilteredProducts = state => {
  const products = selectProducts(state);
  const categories = selectCategory(state);

  return categories.length > 0
    ? products.filter(product => categories.includes(product.category))
    : products;
};
