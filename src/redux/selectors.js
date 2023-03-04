export const selectProducts = state => state.products.items;
export const selectIsLoading = state => state.products.isLoading;

export const selectProductItem = state => state.productItem.item;
export const selectIsLoadingProduct = state => state.productItem.isLoading;

export const selectUser = state => state.auth;
export const selectIsCheckingLogin = state => state.auth.isCheckingLogin;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectCart = state => state.cart.items;
